const { execSync } = require('child_process');

// Configuration
const OWNER = 'ppradyoth';
const PROJECT_NUM = 1;

// Run a GraphQL query via gh CLI
function runGraphQL(query, variables = {}) {
  const payload = { query };
  if (Object.keys(variables).length > 0) {
    payload.variables = variables;
  }
  const cmd = `gh api graphql -f query='${query.replace(/'/g, "'\\''")}'`;
  const result = execSync(cmd, { encoding: 'utf8' });
  return JSON.parse(result);
}

// Heuristics Classifier Function
function classifyRepo(name, description, isFork) {
  const n = name.toLowerCase();
  const d = (description || '').toLowerCase();

  // 🧠 Biocomputing
  if (n.includes('wetware') || n.includes('neuron') || n.includes('brain') || n.includes('biocomput') || d.includes('organoid') || d.includes('biocomputer')) {
    return '🧠 Biocomputing';
  }

  // 🛡️ AI Security
  if (n.includes('security') || n.includes('red-team') || n.includes('safety') || n.includes('refusal') || n.includes('vuln') || n.includes('pentest') || n.includes('malware') || n.includes('jailbreak') || n.includes('injection') || n.includes('gate') || n.includes('guard') || n.includes('garak') || n.includes('promptfoo') || n.includes('inspect') || d.includes('ai security') || d.includes('adversarial ai') || d.includes('mlsecops')) {
    return '🛡️ AI Security';
  }

  // 🔥 Gen AI
  if (n.includes('ctf') || n.includes('prompt') || n.includes('llm') || n.includes('dspy') || n.includes('agent') || n.includes('gpt') || n.includes('gemini') || n.includes('claude') || d.includes('large language model') || d.includes('generative ai') || d.includes('rag')) {
    return '🔥 Gen AI';
  }

  // 🤝 Open Source Contributions
  if (isFork || n.includes('hacktoberfest') || n.includes('contribute') || n.includes('contrib') || n.includes('fork') || n.includes('tableit') || d.includes('contribution') || d.includes('fork')) {
    return '🤝 Open Source Contributions';
  }

  // ⚙️ Traditional ML
  if (n.includes('ml-101') || n.includes('mlops') || n.includes('stock') || n.includes('predictor') || n.includes('sentiment') || n.includes('schmaltz') || n.includes('surveyor') || n.includes('classifier') || n.includes('predict') || n.includes('recommend') || d.includes('machine learning') || d.includes('regression') || d.includes('classification')) {
    return '⚙️ Traditional ML';
  }

  // 🎓 College Projects (2023 & Before - Non-ML)
  return '🎓 College Projects (2023 & Before - Non-ML)';
}

async function main() {
  try {
    console.log('Fetching project fields & single-select options...');
    const initQuery = `
      query {
        user(login: "${OWNER}") {
          projectV2(number: ${PROJECT_NUM}) {
            id
            fields(first: 20) {
              nodes {
                ... on ProjectV2Field {
                  id
                  name
                }
                ... on ProjectV2SingleSelectField {
                  id
                  name
                  options {
                    id
                    name
                  }
                }
              }
            }
          }
        }
      }
    `;
    const initData = runGraphQL(initQuery);
    const project = initData.data.user.projectV2;
    const projectId = project.id;
    const fields = project.fields.nodes;

    const catField = fields.find(f => f.name === 'Category V2');
    const statusField = fields.find(f => f.name === 'Status');

    if (!catField || !statusField) {
      throw new Error('Required Category V2 or Status fields not found in project.');
    }

    console.log(`Project ID: ${projectId}`);
    console.log(`Category V2 Field ID: ${catField.id}`);

    // Map Category Option Names to IDs
    const catOptionsMap = {};
    catField.options.forEach(o => {
      catOptionsMap[o.name] = o.id;
    });

    const statusDoneId = statusField.options.find(o => o.name === 'Done')?.id;
    const statusInProgressId = statusField.options.find(o => o.name === 'In Progress')?.id;

    // Fetch existing items currently on the project
    console.log('Fetching current project items...');
    const itemsQuery = `
      query {
        node(id: "${projectId}") {
          ... on ProjectV2 {
            items(first: 100) {
              nodes {
                id
                content {
                  ... on DraftIssue {
                    title
                  }
                  ... on Issue {
                    title
                    url
                  }
                  ... on PullRequest {
                    title
                    url
                  }
                }
              }
            }
          }
        }
      }
    `;
    const itemsData = runGraphQL(itemsQuery);
    const existingItems = itemsData.data.node.items.nodes;
    const existingTitles = new Set(existingItems.map(i => i.content?.title || ''));

    console.log(`Found ${existingTitles.size} existing items on the board.`);

    // Fetch all user public repositories
    console.log('Fetching user repositories...');
    const reposData = JSON.parse(execSync(`gh repo list ${OWNER} --limit 100 --json name,description,isFork,url,isPrivate`, { encoding: 'utf8' }));
    
    // Filter out private repositories and keep public ones
    const publicRepos = reposData.filter(r => !r.isPrivate && r.name !== OWNER);
    console.log(`Fetched ${publicRepos.length} public repositories.`);

    let addedCount = 0;

    for (const repo of publicRepos) {
      // Check if this repository name is already on the board (either as draft, issue, or exact title)
      const matchingTitle = Array.from(existingTitles).find(title => title.includes(repo.name));
      if (matchingTitle) {
        console.log(`Skipping: ${repo.name} (already matches item "${matchingTitle}")`);
        continue;
      }

      console.log(`\nNew repository detected: ${repo.name}`);
      const category = classifyRepo(repo.name, repo.description, repo.isFork);
      console.log(`Heuristics Category: ${category}`);

      const title = `${repo.isFork ? '🤝' : '🛠️'} ${repo.name}`;
      const body = `**${repo.description || 'No description provided.'}**\n\n🔗 **GitHub**: ${repo.url}`;

      console.log(`Creating Project Draft Card: ${title}...`);
      
      // Create draft item
      const createRes = JSON.parse(execSync(`gh project item-create ${PROJECT_NUM} --owner ${OWNER} --title "${title.replace(/"/g, '\\"')}" --body "${body.replace(/"/g, '\\"')}" --format json`, { encoding: 'utf8' }));
      const itemId = createRes.id;
      console.log(`Created Item ID: ${itemId}`);

      // Set Category V2
      const catOptionId = catOptionsMap[category];
      if (catOptionId) {
        console.log(`Categorizing under ${category}...`);
        execSync(`gh project item-edit --id "${itemId}" --field-id "${catField.id}" --project-id "${projectId}" --single-select-option-id "${catOptionId}"`);
      }

      // Set Status to Done
      if (statusDoneId) {
        console.log('Setting Status to Done...');
        execSync(`gh project item-edit --id "${itemId}" --field-id "${statusField.id}" --project-id "${projectId}" --single-select-option-id "${statusDoneId}"`);
      }

      addedCount++;
      console.log(`Successfully completed auto-classification for ${repo.name}!`);
    }

    console.log(`\nAll done! Successfully added & classified ${addedCount} new repositories.`);

  } catch (error) {
    console.error('Error during auto-classification:', error.message);
    process.exit(1);
  }
}

main();
