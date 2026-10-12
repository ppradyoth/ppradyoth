const fs = require('fs');
const path = require('path');

// Configuration
const WEBSITE_DATA_URL = 'https://raw.githubusercontent.com/ppradyoth/ppradyoth-website/main/lib/data.ts';
const GITHUB_USERNAME = 'ppradyoth';

// Custom descriptions to override default GitHub descriptions with high-quality copy
const CUSTOM_DESCRIPTIONS = {
  'ai-security-resources': 'AI red-teaming tools, research, practical labs, and 7/30/100-day learning paths. Includes agent security, model scanning, standards, interview prep, and public attack taxonomies.',
  'prompt-injection-ctf': '46 AI security missions: 16 covering the OWASP LLM Top 10 (2025) and 30 covering the OWASP Agentic Top 10 (2026). Attack, inspect defenses, and replay controls. Default practice needs no signup or API key. Ranked runs require sign-in.',
  'llm-ops-workshop': 'End-to-end MLOps workflow demonstrating model lifecycle, monitoring, and deployment practices.',
  'ML-101-Workshop': 'Source code from the ML-101 workshop hosted by IEEE Bangalore Section at IEEE CCONNECT. Built to make machine learning accessible to early-career engineers.',
  'schmaltz-surveyor': 'Live sentiment analysis of public tweets. Two-phase project: classifier benchmarking across multiple ML models, then a web app for real-time Twitter sentiment analysis.',
  'synaptic-wetware': 'Organoid intelligence simulator with Hodgkin–Huxley and Izhikevich neuron models, MEA burst detection, and DishBrain-inspired Pong.',
  'weighted-safety-refusal': 'Reference-free, severity-weighted evaluation of harmful refusal and matched benign compliance. Combines both axes into a calibrated safety score so refusing everything earns zero.',
  'AgentInjectionBench': '182 public synthetic cases: 142 attacks and 40 benign controls across 7 attack categories. Evaluate generated tool calls, arguments, and canary disclosures against explicit execution contracts, with saved traces and dataset fingerprints.',
  'ai-security-tracker': 'Tracks public vulnerabilities, CVEs, and security activity across AI/ML repositories.',
  'intent-drift-playbook': 'Research-grounded taxonomy of multi-turn intent drift, with conceptual detection approaches for tracking behavior against the original task and instructions.',
  'railproof': 'Alpha enforcement library for AI agent actions. Deny-by-default policies check tools, arguments, identity, data labels, provenance, approvals, and session budgets before wrapped tools execute.',
  'knowyourai': 'Zero-dependency model verification CLI for GGUF, safetensors, Ollama, and Hugging Face artifacts. Inspect metadata and chat templates without running a model, then pin approved artifacts in ai.lock and check for drift.',
  'agentscan': 'Static security scanner for AI-agent configurations, MCP servers, permission settings, hooks, and instruction files. Flags risky grants and exposed secrets without model calls or dependencies.',
  'agent-supply-chain-guard': 'Local scanner for third-party agent skills, MCP manifests, plugins, and README files. Flags hidden instructions, execution references, credential patterns, broad permissions, and invisible Unicode controls.',
  'on-device-ai-app-starter-kit': 'Browser-local GGUF inference, document retrieval, and source citations. Model setup downloads the artifacts; document processing and inference run locally in LOCAL MODE.',
  'yolobench': 'Sandboxed benchmark for coding-agent judgment when a requested action has an ambiguous or destructive target. Published results currently cover the scripted reference backend, not real coding agents.'
};

const PUBLIC_WORK_HIGHLIGHTS = [
  'Red teaming LLM applications and agent workflows for prompt injection, data leakage, intent drift, and tool misuse.',
  'Building action-level policies, approvals, and session budgets for AI agents with Railproof.',
  'Maintaining AgentInjectionBench: reproducible injection cases, benign controls, and inspectable tool-call traces.',
  'Expanding hands-on training through 16 LLM security missions and 30 agentic security missions.',
  'Checking model artifacts, agent configurations, and third-party skills before they reach a runtime.'
];

// Patterns to exclude minor, test, or school lab repositories to keep the profile premium
const EXCLUDE_PATTERNS = [
  /lab/i,
  /test/i,
  /program/i,
  /session/i,
  /wtproject/i,
  /mp_asm/i,
  /class/i,
  /course/i,
  /practice/i,
  /linktree/i,
  /bende-bot/i,
  /psychmytrip/i,
  /discord/i
];

const EXCLUDED_REPOS = [
  'ppradyoth',
  'stock-predictor-1',
  'ss_lexyacc',
  'Apple-Edu',
  'basic-shop-catalogue-webapp',
  'OperatingSystems'
];

// Only these repos are shown in the Open Source section — must be impactful and post-2023
const IMPACTFUL_REPOS = [
  'synaptic-wetware',
  'prompt-injection-ctf',
  'weighted-safety-refusal',
  'ai-security-resources',
  'llm-ops-workshop',
  'AgentInjectionBench',
  'ai-security-tracker',
  'intent-drift-playbook',
  'railproof',
  'knowyourai',
  'agentscan',
  'agent-supply-chain-guard',
  'on-device-ai-app-starter-kit',
  'yolobench',
];

// File Paths
const readmePath = path.join(__dirname, '..', 'README.md');

// Helper to fetch text content via native fetch
async function fetchText(url, headers = {}) {
  const response = await fetch(url, { headers });
  if (!response.ok) {
    throw new Error(`Failed to fetch ${url}: ${response.statusText}`);
  }
  return response.text();
}

// Helper to fetch JSON content via native fetch
async function fetchJson(url, headers = {}) {
  const text = await fetchText(url, headers);
  return JSON.parse(text);
}

// Helper to parse TS data using eval-slicing (highly robust, dependency-free)
function parseWebsiteData(tsContent) {
  // Slice to avoid certifications/talks type annotations
  const cleanJs = tsContent
    .split('export const certifications')[0]
    .replace(/export const /g, 'exports.');

  const moduleFn = new Function('exports', cleanJs);
  const data = {};
  moduleFn(data);
  return data;
}

// Helper to extract current content between markers
function extractBetweenMarkers(content, startMarker, endMarker) {
  const startIndex = content.indexOf(startMarker);
  const endIndex = content.indexOf(endMarker);
  if (startIndex === -1 || endIndex === -1) return null;
  return content.substring(startIndex + startMarker.length, endIndex).trim();
}

// Helper to replace text between markers — only writes if content actually changed
function replaceBetweenMarkers(content, startMarker, endMarker, replacement) {
  const startIndex = content.indexOf(startMarker);
  const endIndex = content.indexOf(endMarker);

  if (startIndex === -1 || endIndex === -1) {
    console.warn(`Markers not found: ${startMarker} or ${endMarker}`);
    return { content, changed: false };
  }

  const current = content.substring(startIndex + startMarker.length, endIndex).trim();
  if (current === replacement.trim()) {
    return { content, changed: false };
  }

  return {
    content: (
      content.substring(0, startIndex + startMarker.length) +
      '\n' +
      replacement +
      '\n' +
      content.substring(endIndex)
    ),
    changed: true,
  };
}

async function main() {
  try {
    console.log('Starting profile sync...');

    // 1. Load career data from personal website (optional — skipped gracefully if unavailable)
    let careerData = null;
    let latestRole = null;
    try {
      let tsContent;
      const localWebsitePath = path.join(__dirname, '..', '..', '..', 'ppradyoth-website', 'lib', 'data.ts');

      if (fs.existsSync(localWebsitePath)) {
        console.log('Found local website data file at:', localWebsitePath);
        tsContent = fs.readFileSync(localWebsitePath, 'utf8');
      } else {
        console.log('Local website data not found, fetching from remote repo...');
        const websiteHeaders = { 'User-Agent': 'ppradyoth-sync-script' };
        // Use WEBSITE_ACCESS_TOKEN if provided — needed when the website repo is private
        const token = process.env.WEBSITE_ACCESS_TOKEN || process.env.GITHUB_TOKEN;
        if (token) {
          websiteHeaders['Authorization'] = `token ${token}`;
          console.log('Using authorization token for website data fetch.');
        }
        tsContent = await fetchText(WEBSITE_DATA_URL, websiteHeaders);
      }

      careerData = parseWebsiteData(tsContent);
      latestRole = careerData.experience[0];
      if (!latestRole) throw new Error('No experience roles found in website data.');
      console.log(`Latest role parsed: ${latestRole.role} at ${latestRole.company}`);
    } catch (websiteErr) {
      console.warn(`⚠️  Could not load website career data (skipping header/work updates): ${websiteErr.message}`);
    }

    // 2. Fetch public repositories from GitHub API
    console.log('Fetching repositories from GitHub API...');
    const githubHeaders = {
      'User-Agent': 'ppradyoth-sync-script',
      'Accept': 'application/vnd.github+json',
    };
    if (process.env.GITHUB_TOKEN) {
      githubHeaders['Authorization'] = `token ${process.env.GITHUB_TOKEN}`;
    }

    const reposUrl = `https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100`;
    const repos = await fetchJson(reposUrl, githubHeaders);
    console.log(`Fetched ${repos.length} total repositories.`);

    // 3. Read current README.md
    if (!fs.existsSync(readmePath)) {
      throw new Error(`README.md not found at ${readmePath}`);
    }
    let readmeContent = fs.readFileSync(readmePath, 'utf8');
    let anyChanged = false;

    // 4. Update Header + Work section (only if content actually changed)
    if (latestRole) {
      let teamName = latestRole.team || '';
      if (teamName.includes('·')) {
        const parts = teamName.split('·').map(p => p.trim());
        teamName = parts.find(p => p.toLowerCase().includes('red team')) || parts[parts.length - 1];
      }
      const descString = `${latestRole.role} | ${teamName}`;
      const encodedDesc = encodeURIComponent(descString);
      const encodedName = encodeURIComponent(careerData.profile.name);

      const newHeader = `<img src="https://capsule-render.vercel.app/api?type=waving&color=0:0d1117,50:8b0000,100:0e75b6&height=180&section=header&text=${encodedName}&fontSize=48&fontColor=ffffff&animation=twinkling&fontAlignY=35&desc=${encodedDesc}&descAlignY=55&descSize=18&descFontColor=cccccc" width="100%"/>`;
      const headerResult = replaceBetweenMarkers(readmeContent, '<!-- HEADER_START -->', '<!-- HEADER_END -->', newHeader);
      readmeContent = headerResult.content;
      if (headerResult.changed) { console.log('Header updated.'); anyChanged = true; }
      else { console.log('Header unchanged — skipping.'); }

      // 5. Update What I'm Working On (only if highlights changed)
      const highlights = PUBLIC_WORK_HIGHLIGHTS.map(h => `- ${h}`);
      const workLines = highlights.join('\n');
      const workResult = replaceBetweenMarkers(readmeContent, '<!-- WORK_START -->', '<!-- WORK_END -->', workLines);
      readmeContent = workResult.content;
      if (workResult.changed) { console.log('Work section updated.'); anyChanged = true; }
      else { console.log('Work section unchanged — skipping.'); }
    } else {
      console.log('Skipping header/work update (no career data available).');
    }

    // 6. Update Open Source Section
    const formattedRepos = repos
      .filter(r => {
        if (r.fork || r.private || r.archived || EXCLUDED_REPOS.includes(r.name)) return false;
        // Exclude minor, lab, or test repositories
        if (EXCLUDE_PATTERNS.some(pat => pat.test(r.name))) return false;
        // Exclude repositories created in or before 2023
        const createdYear = new Date(r.created_at).getFullYear();
        if (createdYear <= 2023) return false;
        // Keep only repositories flagged as impactful
        if (!IMPACTFUL_REPOS.includes(r.name)) return false;
        return true;
      })
      .sort((a, b) => {
        if (b.stargazers_count !== a.stargazers_count) return b.stargazers_count - a.stargazers_count;
        return new Date(b.pushed_at) - new Date(a.pushed_at);
      })
      .map(r => {
        const starBadge = r.stargazers_count > 0 ? ` (⭐ ${r.stargazers_count})` : '';
        // Redact any company name from the repo description with a generic term
        let description = CUSTOM_DESCRIPTIONS[r.name] || r.description || 'No description provided.';
        description = description.replace(/JPMorganChase|JPMC/gi, 'my workplace');
        return `**[${r.name}](${r.html_url})**${starBadge} — ${description}`;
      })
      .join('\n\n');

    const openSourceContent = formattedRepos + '\n\n📋 [Full list of external contributions](./EXTERNAL_CONTRIBUTIONS.md) — repos outside my account where I\'ve contributed (2020–present)';
    const openSourceResult = replaceBetweenMarkers(readmeContent, '<!-- OPENSYNC_START -->', '<!-- OPENSYNC_END -->', openSourceContent);
    readmeContent = openSourceResult.content;
    if (openSourceResult.changed) { console.log('Open source section updated.'); anyChanged = true; }
    else { console.log('Open source section unchanged — skipping.'); }

    // 7. Write only if something actually changed
    if (!anyChanged) {
      console.log('README.md is already up to date — no write needed.');
      return;
    }
    fs.writeFileSync(readmePath, readmeContent, 'utf8');
    console.log('README.md updated.');

  } catch (error) {
    console.error('Error during sync process:', error);
    process.exit(1);
  }
}

main();
