<!-- HEADER_START -->
<img src="https://capsule-render.vercel.app/api?type=waving&color=0:0d1117,50:8b0000,100:0e75b6&height=180&section=header&text=Pradyoth%20Prashanth&fontSize=48&fontColor=ffffff&animation=twinkling&fontAlignY=35&desc=Security%20Engineer%20II%20(Associate)%20%7C%20Gen%20AI%20Red%20Teaming&descAlignY=55&descSize=18&descFontColor=cccccc" width="100%"/>
<!-- HEADER_END -->

<p align="center">
  <img src="https://readme-typing-svg.demolab.com?font=Fira+Code&size=20&pause=1000&color=CC2200&center=true&width=600&lines=Gen+AI+Red+Teaming;Adversarial+AI+%26+LLM+Security;Prompt+Injection+%26+Jailbreak+Analysis;AI+Safety+%26+Behavioral+Evaluation;Breaking+AI+so+you+don't+have+to." alt="Typing SVG" />
</p>

---

I break production AI, then build the controls that hold.

I'm an AI security engineer and red teamer focused on prompt injection, agent tool abuse, model provenance, and runtime enforcement. These are my independent projects and public research.

**What I'm working on:**
<!-- WORK_START -->
- Red teaming LLM applications and agent workflows for prompt injection, data leakage, intent drift, and tool misuse.
- Building action-level policies, approvals, and session budgets for AI agents with Railproof.
- Maintaining AgentInjectionBench: reproducible injection cases, benign controls, and inspectable tool-call traces.
- Expanding hands-on training through 16 LLM security missions and 30 agentic security missions.
- Checking model artifacts, agent configurations, and third-party skills before they reach a runtime.
<!-- WORK_END -->

**Recognition:** Inventor Recognition (Q4 2025) for filed patents · DEVUP 2026 speaker · SEP Engineer Committee Lead for 1,100+ early-career engineers

[Portfolio](https://ppradyoth.com/) · [Research & evidence](https://ppradyoth.com/research) · [Email](mailto:ppradyoth64@gmail.com)

---

<h3 align="left">Merged External Contributions</h3>

4 merged PRs across 3 AI security, evaluation, and privacy tools.

| Repository | What the tool does | My merged contributions |
|---|---|---|
| [Presidio](https://github.com/data-privacy-stack/presidio) | Detects, redacts, and anonymizes sensitive personal data (PII) in text, images, and structured data. | [#2254](https://github.com/data-privacy-stack/presidio/pull/2254): Fixed YAML deny-list defaults that silently dropped matches at positive detection thresholds. |
| [Promptfoo](https://github.com/promptfoo/promptfoo) | Evaluates and red teams LLM applications, agents, and RAG pipelines, with repeatable tests and CI integration. | [#9402](https://github.com/promptfoo/promptfoo/pull/9402): Fixed config merging that silently dropped distinct function-based providers from evaluations. |
| [NVIDIA garak](https://github.com/NVIDIA/garak) | Scans LLMs for vulnerabilities including prompt injection, data leakage, jailbreaks, and harmful outputs. | [#1794](https://github.com/NVIDIA/garak/pull/1794): Fixed a z-rating evaluation crash caused by a removed calibration method.<br>[#1791](https://github.com/NVIDIA/garak/pull/1791): Added regression coverage for configuration-file deduplication in scan reports. |

[Full contribution history](./EXTERNAL_CONTRIBUTIONS.md) · Merge status verified 17 Oct 2026.

---

<h3 align="left">🛡️ Featured AI Security Projects</h3>

<p align="left">
  Tools for testing agent behavior, enforcing action policies, and inspecting the models and configurations those agents depend on.
</p>

<table width="100%" border="0" cellpadding="8" cellspacing="0">
  <tr>
    <td width="50%" valign="top" style="border: 1px solid #30363d; border-radius: 6px; padding: 16px; background-color: #0d1117;">
      <h4 align="left" style="margin-top: 0;">🎮 Prompt Injection CTF</h4>
      <p align="left"><strong>46 LLM & Agentic Security Missions</strong></p>
      <p align="left">Hands-on training across the OWASP LLM Top 10 (2025) and Agentic Top 10 (2026). Attack a constrained system, inspect the defense, and test whether legitimate work still succeeds.</p>
      <ul align="left">
        <li><strong>16 LLM missions + 30 agentic missions</strong>, with attacker and defender tracks</li>
        <li><strong>Defense replay and legitimate-task controls</strong> in the Agentic Security Lab</li>
        <li><strong>Free default practice</strong> without signup or an API key. Ranked runs require sign-in. Live-model grading is optional</li>
      </ul>
      <p align="left">
        <img src="https://img.shields.io/badge/Next.js-16-111111?style=flat-square&logo=next.js" alt="Next.js" />
        <img src="https://img.shields.io/badge/Tailwind-v4-0e75b6?style=flat-square&logo=tailwindcss" alt="Tailwind" />
        <img src="https://img.shields.io/badge/Security-OWASP_LLM_%26_Agentic-cc2200?style=flat-square" alt="OWASP LLM and Agentic" />
      </p>
      <p align="left">
        <a href="https://github.com/ppradyoth/prompt-injection-ctf">Codebase</a> &nbsp;•&nbsp; <a href="https://knowyourai.live/ctf">Play the CTF</a>
      </p>
    </td>
    <td width="50%" valign="top" style="border: 1px solid #30363d; border-radius: 6px; padding: 16px; background-color: #0d1117;">
      <h4 align="left" style="margin-top: 0;">🔬 AgentInjectionBench</h4>
      <p align="left"><strong>Reproducible Tests for Agent Tool Use</strong></p>
      <p align="left">A public synthetic case pack and runner for testing whether untrusted content redirects an agent's next action. Inspect generated tool calls and arguments against each case's execution contract.</p>
      <ul align="left">
        <li><strong>182 cases: 142 attacks + 40 benign controls</strong> across 7 attack categories</li>
        <li><strong>Saved traces, case IDs, and dataset fingerprints</strong> for repeatable before-and-after runs</li>
        <li><strong>Model adapters and a custom-agent interface</strong>. Built-in adapters simulate tool results and execute no external actions</li>
      </ul>
      <p align="left">
        <img src="https://img.shields.io/badge/Dataset-182_cases-yellow?style=flat-square" alt="182 synthetic cases" />
        <img src="https://img.shields.io/badge/License-Apache_2.0-blue?style=flat-square" alt="Apache 2.0" />
        <img src="https://img.shields.io/badge/Benchmark-Agentic_AI-cc2200?style=flat-square" alt="Agentic AI benchmark" />
      </p>
      <p align="left">
        <a href="https://github.com/ppradyoth/AgentInjectionBench">Codebase</a> &nbsp;•&nbsp; <a href="https://huggingface.co/datasets/ppradyoth/AgentInjectionBench">Dataset</a> &nbsp;•&nbsp; <a href="https://huggingface.co/spaces/ppradyoth/AgentInjectionBench">Interactive Space</a>
      </p>
    </td>
  </tr>
  <tr>
    <td width="50%" valign="top" style="border: 1px solid #30363d; border-radius: 6px; padding: 16px; background-color: #0d1117;">
      <h4 align="left" style="margin-top: 0;">Railproof</h4>
      <p align="left"><strong>Security Contracts Before Tools Execute</strong></p>
      <p align="left">An alpha enforcement library that puts a deterministic policy decision in front of wrapped tool calls. Check the exact action, identity, data provenance, and session state before application code runs.</p>
      <ul align="left">
        <li><strong>Deny-by-default policies</strong> over tools, arguments, users, tenants, roles, and data labels</li>
        <li><strong>One-time approvals</strong> bound to the exact action, plus atomic session budgets</li>
        <li><strong>OpenAI and MCP adapters</strong>, policy replay, and redacted decision records</li>
      </ul>
      <p align="left">
        <img src="https://img.shields.io/badge/Status-Alpha-orange?style=flat-square" alt="Alpha" />
        <img src="https://img.shields.io/badge/Python-3.11%2B-cc2200?style=flat-square&logo=python" alt="Python 3.11 or newer" />
        <img src="https://img.shields.io/badge/License-Apache_2.0-blue?style=flat-square" alt="Apache 2.0" />
      </p>
      <p align="left">
        <a href="https://github.com/ppradyoth/railproof">Codebase</a>
      </p>
    </td>
    <td width="50%" valign="top" style="border: 1px solid #30363d; border-radius: 6px; padding: 16px; background-color: #0d1117;">
      <h4 align="left" style="margin-top: 0;">knowyourai</h4>
      <p align="left"><strong>Inspect Model Artifacts. Pin What You Approved.</strong></p>
      <p align="left">A zero-dependency CLI for inspecting open-weight model metadata, structure, and chat templates without loading or running a model. Check approved artifacts for changes with a model lockfile.</p>
      <ul align="left">
        <li><strong>GGUF, safetensors, Ollama, and Hugging Face</strong> model sources</li>
        <li><strong>Offline by default</strong>, with optional registry comparison and remote header inspection</li>
        <li><strong>ai.lock</strong> pins revisions and digests. <strong>check</strong> detects changes for CI</li>
      </ul>
      <p align="left">
        <img src="https://img.shields.io/badge/Status-Alpha-orange?style=flat-square" alt="Alpha" />
        <img src="https://img.shields.io/badge/Python-3.11%2B-cc2200?style=flat-square&logo=python" alt="Python 3.11 or newer" />
        <img src="https://img.shields.io/badge/Dependencies-Zero-0e75b6?style=flat-square" alt="Zero dependencies" />
      </p>
      <p align="left">
        <a href="https://github.com/ppradyoth/knowyourai">Codebase</a>
      </p>
    </td>
  </tr>
  <tr>
    <td width="50%" valign="top" style="border: 1px solid #30363d; border-radius: 6px; padding: 16px; background-color: #0d1117;">
      <h4 align="left" style="margin-top: 0;">agentscan</h4>
      <p align="left"><strong>Static Security Checks for Agent Configurations</strong></p>
      <p align="left">Scan MCP configurations, agent permissions, hooks, and instruction files for security signals before giving a coding agent access to a repository.</p>
      <ul align="left">
        <li><strong>Permission bypasses, wildcard tool grants, broad filesystem roots, and hardcoded secrets</strong></li>
        <li><strong>Claude Code, Cursor, Cline/Roo, Windsurf, and Copilot</strong> configuration coverage</li>
        <li><strong>No model calls or dependencies</strong>, with JSON/Markdown output and severity-based CI gates</li>
      </ul>
      <p align="left">
        <img src="https://img.shields.io/badge/Python-Static_Analysis-cc2200?style=flat-square&logo=python" alt="Python static analysis" />
        <img src="https://img.shields.io/badge/License-MIT-green?style=flat-square" alt="MIT" />
        <img src="https://img.shields.io/badge/Dependencies-Zero-0e75b6?style=flat-square" alt="Zero dependencies" />
      </p>
      <p align="left">
        <a href="https://github.com/ppradyoth/agentscan">Codebase</a>
      </p>
    </td>
    <td width="50%" valign="top" style="border: 1px solid #30363d; border-radius: 6px; padding: 16px; background-color: #0d1117;">
      <h4 align="left" style="margin-top: 0;">Agent Supply Chain Guard</h4>
      <p align="left"><strong>Scan Skills & Manifests Before an Agent Reads Them</strong></p>
      <p align="left">A local scanner for instruction-bearing supply-chain files: third-party skills, MCP manifests, plugins, and READMEs. Findings are review signals, not proof of exploitation.</p>
      <ul align="left">
        <li><strong>Hidden instructions, execution references, credential patterns, and broad permissions</strong></li>
        <li><strong>Invisible Unicode controls</strong> and dangerous URL schemes</li>
        <li><strong>Dependency-free rules and a GitHub Action</strong>, with optional provider-backed review</li>
      </ul>
      <p align="left">
        <img src="https://img.shields.io/badge/Python-Local_Scanner-cc2200?style=flat-square&logo=python" alt="Python local scanner" />
        <img src="https://img.shields.io/badge/License-Apache_2.0-blue?style=flat-square" alt="Apache 2.0" />
        <img src="https://img.shields.io/badge/CI-GitHub_Action-0e75b6?style=flat-square&logo=github" alt="GitHub Action" />
      </p>
      <p align="left">
        <a href="https://github.com/ppradyoth/agent-supply-chain-guard">Codebase</a>
      </p>
    </td>
  </tr>
</table>

---

<h3 align="left">Open Source</h3>

<!-- OPENSYNC_START -->
**[prompt-injection-ctf](https://github.com/ppradyoth/prompt-injection-ctf)** (⭐ 8) — 46 AI security missions: 16 covering the OWASP LLM Top 10 (2025) and 30 covering the OWASP Agentic Top 10 (2026). Attack, inspect defenses, and replay controls. Default practice needs no signup or API key. Ranked runs require sign-in.

**[AgentInjectionBench](https://github.com/ppradyoth/AgentInjectionBench)** (⭐ 4) — 182 public synthetic cases: 142 attacks and 40 benign controls across 7 attack categories. Evaluate generated tool calls, arguments, and canary disclosures against explicit execution contracts, with saved traces and dataset fingerprints.

**[ai-security-resources](https://github.com/ppradyoth/ai-security-resources)** (⭐ 4) — AI red-teaming tools, research, practical labs, and 7/30/100-day learning paths. Includes agent security, model scanning, standards, interview prep, and public attack taxonomies.

**[weighted-safety-refusal](https://github.com/ppradyoth/weighted-safety-refusal)** (⭐ 1) — Reference-free, severity-weighted evaluation of harmful refusal and matched benign compliance. Combines both axes into a calibrated safety score so refusing everything earns zero.

**[synaptic-wetware](https://github.com/ppradyoth/synaptic-wetware)** (⭐ 1) — Organoid intelligence simulator with Hodgkin–Huxley and Izhikevich neuron models, MEA burst detection, and DishBrain-inspired Pong.

**[railproof](https://github.com/ppradyoth/railproof)** — Alpha enforcement library for AI agent actions. Deny-by-default policies check tools, arguments, identity, data labels, provenance, approvals, and session budgets before wrapped tools execute.

**[knowyourai](https://github.com/ppradyoth/knowyourai)** — Zero-dependency model verification CLI for GGUF, safetensors, Ollama, and Hugging Face artifacts. Inspect metadata and chat templates without running a model, then pin approved artifacts in ai.lock and check for drift.

**[agentscan](https://github.com/ppradyoth/agentscan)** — Static security scanner for AI-agent configurations, MCP servers, permission settings, hooks, and instruction files. Flags risky grants and exposed secrets without model calls or dependencies.

**[on-device-ai-app-starter-kit](https://github.com/ppradyoth/on-device-ai-app-starter-kit)** — Browser-local GGUF inference, document retrieval, and source citations. Model setup downloads the artifacts; document processing and inference run locally in LOCAL MODE.

**[agent-supply-chain-guard](https://github.com/ppradyoth/agent-supply-chain-guard)** — Local scanner for third-party agent skills, MCP manifests, plugins, and README files. Flags hidden instructions, execution references, credential patterns, broad permissions, and invisible Unicode controls.

**[yolobench](https://github.com/ppradyoth/yolobench)** — Sandboxed benchmark for coding-agent judgment when a requested action has an ambiguous or destructive target. Published results currently cover the scripted reference backend, not real coding agents.

**[intent-drift-playbook](https://github.com/ppradyoth/intent-drift-playbook)** — Research-grounded taxonomy of multi-turn intent drift, with conceptual detection approaches for tracking behavior against the original task and instructions.

**[ai-security-tracker](https://github.com/ppradyoth/ai-security-tracker)** — Tracks public vulnerabilities, CVEs, and security activity across AI/ML repositories.

**[llm-ops-workshop](https://github.com/ppradyoth/llm-ops-workshop)** — End-to-end MLOps workflow demonstrating model lifecycle, monitoring, and deployment practices.

📋 [Full list of external contributions](./EXTERNAL_CONTRIBUTIONS.md) — repos outside my account where I've contributed (2020–present)
<!-- OPENSYNC_END -->

---

<h3 align="left">AI & LLM Security</h3>

**LLMs & AI Platforms**

![Claude](https://img.shields.io/badge/Claude-Anthropic-cc2200?style=for-the-badge&logo=anthropic&logoColor=white)
![ChatGPT](https://img.shields.io/badge/ChatGPT-OpenAI-0e75b6?style=for-the-badge&logo=openai&logoColor=white)
![Gemini](https://img.shields.io/badge/Gemini-Google-0e75b6?style=for-the-badge&logo=google&logoColor=white)
![Grok](https://img.shields.io/badge/Grok-xAI-111111?style=for-the-badge&logoColor=white)
![Llama](https://img.shields.io/badge/Llama-Meta-0e75b6?style=for-the-badge&logo=meta&logoColor=white)
![Mistral](https://img.shields.io/badge/Mistral-AI-cc2200?style=for-the-badge&logoColor=white)
![Copilot](https://img.shields.io/badge/GitHub%20Copilot-111111?style=for-the-badge&logo=github&logoColor=white)
![NVIDIA NIM](https://img.shields.io/badge/NVIDIA%20NIM-76b900?style=for-the-badge&logo=nvidia&logoColor=white)
![Hugging Face](https://img.shields.io/badge/Hugging%20Face-FFD21E?style=for-the-badge&logoColor=black)

**Red Team & Security Tools**

![Garak](https://img.shields.io/badge/Garak-LLM%20Vuln%20Scanner-cc2200?style=for-the-badge&logo=python&logoColor=white)
![PyRIT](https://img.shields.io/badge/PyRIT-MS%20AI%20Red%20Team-cc2200?style=for-the-badge&logo=microsoft&logoColor=white)
![Promptfoo](https://img.shields.io/badge/Promptfoo-LLM%20Testing-0e75b6?style=for-the-badge&logoColor=white)
![Protect AI](https://img.shields.io/badge/Protect%20AI-ML%20Security-cc2200?style=for-the-badge&logoColor=white)
![Prisma AIRS](https://img.shields.io/badge/Prisma%20AIRS-Palo%20Alto%20Networks-cc2200?style=for-the-badge&logoColor=white)
![NeMo Guardrails](https://img.shields.io/badge/NeMo%20Guardrails-NVIDIA-76b900?style=for-the-badge&logo=nvidia&logoColor=white)
![Lakera Guard](https://img.shields.io/badge/Lakera%20Guard-Prompt%20Injection-cc2200?style=for-the-badge&logoColor=white)
![Burp Suite](https://img.shields.io/badge/Burp%20Suite-PortSwigger-cc2200?style=for-the-badge&logoColor=white)
![Counterfit](https://img.shields.io/badge/Counterfit-MS%20AI%20Security-0e75b6?style=for-the-badge&logo=microsoft&logoColor=white)

**Frameworks & Standards**

![OWASP LLM Top 10](https://img.shields.io/badge/OWASP%20LLM%20Top%2010-111111?style=for-the-badge&logoColor=white)
![MITRE ATLAS](https://img.shields.io/badge/MITRE%20ATLAS-Adversarial%20ML-cc2200?style=for-the-badge&logoColor=white)
![NIST AI RMF](https://img.shields.io/badge/NIST%20AI%20RMF-0e75b6?style=for-the-badge&logoColor=white)

---

<h3 align="left">Connect</h3>
<p align="left">
  <a href="https://linkedin.com/in/ppradyoth" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/linked-in-alt.svg" alt="ppradyoth" height="40" width="40" /></a>
  <a href="https://twitter.com/ppradyoth" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/twitter.svg" alt="ppradyoth" height="40" width="40" /></a>
  <a href="https://medium.com/@ppradyoth" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/medium.svg" alt="@ppradyoth" height="40" width="40" /></a>
  <a href="https://kaggle.com/ppradyoth" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/kaggle.svg" alt="ppradyoth" height="40" width="40" /></a>
  <a href="https://instagram.com/ppradyoth" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/instagram.svg" alt="ppradyoth" height="40" width="40" /></a>
  <a href="https://hashnode.com/@ppradyoth" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/hashnode.svg" alt="@ppradyoth" height="40" width="40" /></a>
  <a href="https://www.youtube.com/c/pradyothp" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/youtube.svg" alt="pradyothp" height="40" width="40" /></a>
  <a href="https://www.hackerrank.com/ppradyoth" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/hackerrank.svg" alt="ppradyoth" height="40" width="40" /></a>
  <a href="https://fb.com/ppradyoth" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/facebook.svg" alt="ppradyoth" height="40" width="40" /></a>
</p>

---

<details>
<summary><b>Tech Stack</b></summary>
<br>
<p align="left">
  <a href="https://www.python.org" target="_blank"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" alt="python" width="40" height="40"/></a>
  <a href="https://www.java.com" target="_blank"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg" alt="java" width="40" height="40"/></a>
  <a href="https://spring.io/" target="_blank"><img src="https://www.vectorlogo.zone/logos/springio/springio-icon.svg" alt="spring" width="40" height="40"/></a>
  <a href="https://www.docker.com/" target="_blank"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg" alt="docker" width="40" height="40"/></a>
  <a href="https://kubernetes.io" target="_blank"><img src="https://www.vectorlogo.zone/logos/kubernetes/kubernetes-icon.svg" alt="kubernetes" width="40" height="40"/></a>
  <a href="https://aws.amazon.com" target="_blank"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" alt="aws" width="40" height="40"/></a>
  <a href="https://www.terraform.io/" target="_blank"><img src="https://www.vectorlogo.zone/logos/terraformio/terraformio-icon.svg" alt="terraform" width="40" height="40"/></a>
  <a href="https://kafka.apache.org/" target="_blank"><img src="https://www.vectorlogo.zone/logos/apache_kafka/apache_kafka-icon.svg" alt="kafka" width="40" height="40"/></a>
  <a href="https://redis.io" target="_blank"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redis/redis-original-wordmark.svg" alt="redis" width="40" height="40"/></a>
  <a href="https://www.mysql.com/" target="_blank"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg" alt="mysql" width="40" height="40"/></a>
  <a href="https://grafana.com" target="_blank"><img src="https://www.vectorlogo.zone/logos/grafana/grafana-icon.svg" alt="grafana" width="40" height="40"/></a>
  <a href="https://www.jenkins.io" target="_blank"><img src="https://www.vectorlogo.zone/logos/jenkins/jenkins-icon.svg" alt="jenkins" width="40" height="40"/></a>
  <a href="https://www.linux.org/" target="_blank"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg" alt="linux" width="40" height="40"/></a>
  <a href="https://git-scm.com/" target="_blank"><img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="git" width="40" height="40"/></a>
  <a href="https://www.postman.com" target="_blank"><img src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" alt="postman" width="40" height="40"/></a>
  <a href="https://www.raspberrypi.org/" target="_blank"><img src="https://www.vectorlogo.zone/logos/raspberrypi/raspberrypi-icon.svg" alt="raspberrypi" width="40" height="40"/></a>
  <a href="https://www.cprogramming.com/" target="_blank"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg" alt="c" width="40" height="40"/></a>
  <a href="https://www.w3schools.com/cpp/" target="_blank"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg" alt="cplusplus" width="40" height="40"/></a>
  <a href="https://www.w3schools.com/css/" target="_blank"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40"/></a>
  <a href="https://www.w3.org/html/" target="_blank"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40"/></a>
  <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/></a>
  <a href="https://golang.org" target="_blank"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/go/go-original.svg" alt="go" width="40" height="40"/></a>
  <a href="https://nodejs.org" target="_blank"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" width="40" height="40"/></a>
  <a href="https://www.mongodb.com/" target="_blank"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg" alt="mongodb" width="40" height="40"/></a>
  <a href="https://firebase.google.com/" target="_blank"><img src="https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg" alt="firebase" width="40" height="40"/></a>
  <a href="https://cloud.google.com" target="_blank"><img src="https://www.vectorlogo.zone/logos/google_cloud/google_cloud-icon.svg" alt="gcp" width="40" height="40"/></a>
  <a href="https://heroku.com" target="_blank"><img src="https://www.vectorlogo.zone/logos/heroku/heroku-icon.svg" alt="heroku" width="40" height="40"/></a>
  <a href="https://opencv.org/" target="_blank"><img src="https://www.vectorlogo.zone/logos/opencv/opencv-icon.svg" alt="opencv" width="40" height="40"/></a>
  <a href="https://pandas.pydata.org/" target="_blank"><img src="https://raw.githubusercontent.com/devicons/devicon/2ae2a900d2f041da66e950e4d48052658d850630/icons/pandas/pandas-original.svg" alt="pandas" width="40" height="40"/></a>
  <a href="https://scikit-learn.org/" target="_blank"><img src="https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg" alt="scikit_learn" width="40" height="40"/></a>
  <a href="https://www.tensorflow.org" target="_blank"><img src="https://www.vectorlogo.zone/logos/tensorflow/tensorflow-icon.svg" alt="tensorflow" width="40" height="40"/></a>
  <a href="https://tailwindcss.com/" target="_blank"><img src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" alt="tailwind" width="40" height="40"/></a>
  <a href="https://www.photoshop.com/en" target="_blank"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/photoshop/photoshop-line.svg" alt="photoshop" width="40" height="40"/></a>
</p>
</details>

---

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:0e75b6,50:8b0000,100:0d1117&height=120&section=footer" width="100%"/>
