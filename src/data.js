// All site copy lives here so content can be edited without touching layout code.
// Facts follow the October 2026 résumé.

export const person = {
  name: 'Sudheer Bishnoi',
  role: 'AI Automation Engineer',
  tagline: 'I build AI automation that holds up in production: LLM agents, RAG assistants and MCP tools, with validation and human review built in.',
  sub: 'AI Automation Engineer at Acumen Operators. Before that, five years at Amazon automating catalog operations with Python and shipping LLM agents, RAG and MCP servers to the teams around me.',
  email: 'sudheerdudi00@gmail.com',
  linkedin: 'https://www.linkedin.com/in/sudheer-bishnoi',
  github: 'https://github.com/Sudheer-029',
  status: 'AI Automation Engineer · Acumen Operators',
  languages: 'English fluent · German conversational · Hindi native',
  workSetup: 'Remote, hybrid or on-site',
  // Set to a path such as '/resumes/Sudheer_Bishnoi_CV.pdf' once the PDF is in public/resumes/.
  // While this is null, every "Download CV" button stays hidden.
  cvUrl: null,
}

export const stats = [
  { value: '15 min → 30 s', label: 'case lookup time after the operations AI assistant launched', color: 'cyan' },
  { value: '$7,724', label: 'verified annual savings from Python and AI automation', color: 'emerald' },
  { value: '3+', label: 'headcount of manual effort removed by agentic workflows', color: 'violet' },
  { value: 'Top 1%', label: '182 of 19,799 in the Prompt Wars v2 AI hackathon', color: 'amber' },
]

export const work = [
  {
    id: 'ops-assistant',
    tag: 'Production AI · Amazon (details anonymised)',
    title: 'Enterprise operations AI assistant',
    color: 'cyan',
    headline: 'Case lookup cut from ~15 minutes to under 30 seconds',
    problem: 'A large operations team looked up cases by hand, checked queue health manually and searched 59 SOPs for answers, so SLA breaches were easy to miss.',
    built: [
      'Natural-language case lookup against live operational data, plus on-demand queue health reports.',
      'Cited answers over 59 SOPs from a knowledge base on AWS Bedrock, served through MCP servers on EC2 (one connects 30+ tools) and orchestrated with Lambda.',
      'Proactive SLA-breach alerts to the team channel and an automatic Monday performance digest by email.',
    ],
    result: 'No SLA breach was missed after launch, and weekly reporting became fully automated. Internal system, so no code or names are shared.',
    stack: ['AWS Bedrock', 'Claude', 'MCP', 'RAG', 'AWS Lambda', 'EC2', 'Python'],
  },
  {
    id: 'almoner',
    tag: 'Multi-agent system · AWS hackathon',
    title: 'Almoner',
    color: 'violet',
    headline: 'LLM judgment kept apart from the money maths, so figures are never hallucinated',
    problem: 'Small nonprofits have no bookkeeper. A volunteer treasurer traces lump-sum deposits back to donations, writes donor acknowledgements and proves grant money was spent as agreed.',
    built: [
      'Agents that reconcile bank deposits against donations, draft donor acknowledgements and check expenses against grant-agreement rules.',
      'Every figure is computed by deterministic Python; the model only judges and drafts, and an append-only SQLite ledger records what happened.',
      'Nothing is sent automatically: every output is a draft for a person to approve.',
    ],
    result: 'Built for the AWS “Agents for Humans” hackathon (Good Neighbor track), covered by 22 automated tests.',
    stack: ['Strands Agents SDK', 'AWS Bedrock', 'Claude', 'Python', 'SQLite', 'pytest'],
    githubUrl: 'https://github.com/Sudheer-029/Almoner_agent_for_human_AWS',
    diagramUrl: '/diagrams/almoner.html',
  },
  {
    id: 'gst-autoflow',
    tag: 'Python automation · Open source',
    title: 'GST AutoFlow',
    color: 'emerald',
    headline: 'Three GST reconciliation jobs in one tested tool',
    problem: 'Indian accountants reconcile GST by hand: purchase registers against GSTR-2B, invoice PDFs into spreadsheets, bank payments against liabilities.',
    built: [
      'Purchase-register vs GSTR-2B matching with a ±₹10 tolerance so rupee rounding does not show up as false mismatches, flagging input tax credit at risk.',
      'Invoice field extraction from PDFs, falling back to OCR for scans and flagging low-confidence rows for review.',
      'Fuzzy column mapping that reads Tally, Zoho and ERPNext exports without manual renaming.',
    ],
    result: 'Live, with 18 unit tests and auto-deploy on every push to main. Rules-based on purpose: it feeds tax filings, so every match must be explainable.',
    stack: ['Python', 'pandas', 'Streamlit', 'pdfplumber', 'Tesseract', 'pytest'],
    liveUrl: 'https://gst-autoflow.streamlit.app',
    githubUrl: 'https://github.com/Sudheer-029/gst-autoflow',
    diagramUrl: '/diagrams/gst-autoflow.html',
  },
  {
    id: 'electaguide',
    tag: 'AI assistant · Hackathon',
    title: 'ElectaGuide',
    color: 'amber',
    headline: 'Ranked 182 of 19,799 (top 1%) in Prompt Wars v2',
    problem: 'Voting information in India is scattered across sources and rarely written in the language people prefer.',
    built: [
      'A React app with its interface in 8 Indian languages and an assistant that answers election questions in the language they are asked.',
      'A FastAPI backend on Google Cloud Run calling Gemini, with model fallback, per-IP rate limiting and input limits.',
      'Built and deployed with Cloud Build, with the API key kept in Secret Manager.',
    ],
    result: 'Shipped end to end within the hackathon window.',
    stack: ['Gemini', 'FastAPI', 'React', 'Cloud Run', 'Cloud Build'],
    liveUrl: 'https://electaguide-152578302488.us-central1.run.app',
    githubUrl: 'https://github.com/Sudheer-029/promptwars-v2',
    diagramUrl: '/diagrams/electaguide.html',
  },
]

export const smallerBuilds = [
  {
    title: 'Internal knowledge assistant with MCP',
    context: 'Acumen Operators',
    desc: 'Turned about 2,000 internal files into a RAG knowledge base on AWS Bedrock, exposed through an MCP server on Lambda and connected to Claude and ClickUp.',
    stack: ['AWS Bedrock', 'Lambda', 'MCP', 'ClickUp'],
  },
  {
    title: 'AI troubleshooting bot',
    context: 'Amazon · ~30 daily users',
    desc: 'A Slack bot on AWS Bedrock that analyses incident reports and suggests fixes, with a human approval step before any action runs.',
    stack: ['Python', 'AWS Bedrock', 'Slack Bolt'],
    githubUrl: 'https://github.com/Sudheer-029/slack-troubleshoot-bot',
    diagramUrl: '/diagrams/slack-bot.html',
  },
  {
    title: 'EcoNudge',
    context: 'Prompt Wars Virtual Challenge 3',
    desc: 'Shows the carbon cost of a food order at checkout and suggests a lower-carbon swap. Gemini only phrases the explanation; a tested engine computes every figure (33 Vitest tests).',
    stack: ['React', 'TypeScript', 'Hono', 'Cloud Run', 'Gemini'],
    liveUrl: 'https://econudge-1073149106934.asia-south1.run.app',
    githubUrl: 'https://github.com/Sudheer-029/promptwars-v3--EcoNudge',
    diagramUrl: '/diagrams/econudge.html',
  },
  {
    title: 'Amazon catalog → JSON-LD pipeline',
    context: 'Data pipeline',
    desc: 'Converts SP-API product data into Schema.org JSON-LD reusable for Google Rich Results, Shopify and TikTok Shop. Cut manual catalog structuring from about six months to a few weeks.',
    stack: ['Python', 'JSON-LD', 'Schema.org'],
    githubUrl: 'https://github.com/Sudheer-029/amazon-jsonld-pipeline',
    diagramUrl: '/diagrams/jsonld-pipeline.html',
  },
  {
    title: 'RAG deep learning assistant',
    context: 'Learning project',
    desc: 'Question answering over Wikipedia articles with Chroma, MiniLM embeddings and Llama 3.1 via Groq, behind a Gradio chat UI.',
    stack: ['LangChain', 'ChromaDB', 'Groq', 'Gradio'],
    githubUrl: 'https://github.com/Sudheer-029/rag-deep-learning-assistant',
    diagramUrl: '/diagrams/rag-assistant.html',
  },
]

export const timeline = [
  {
    period: 'Aug 2026 – Present',
    title: 'AI Automation Engineer',
    org: 'Acumen Operators · Remote (Munich)',
    body: 'Designing AI automation for e-commerce and operations workflows: LLM steps, agentic patterns, Playwright browser automation and API integrations, with validation, error handling and human approval before anything is acted on.',
    color: 'cyan',
  },
  {
    period: 'Jul 2024 – Aug 2026',
    title: 'Catalog Specialist ML',
    org: 'Amazon',
    body: 'Built agent-based automation for catalog investigations (3+ hours saved per task), the operations AI assistant above, and Python scraping pipelines with Scrapy, Playwright and Selenium. Delivered $7,724+ in annual savings and trained 10+ colleagues on AI tooling.',
    color: 'violet',
  },
  {
    period: 'Jul 2021 – Aug 2024',
    title: 'Catalog Associate',
    org: 'Amazon',
    body: 'Wrote Python scripts and automation for catalog processing and best-seller ranking that saved the equivalent of one full-time role, and ran root-cause analysis on catalog defects across ML-assisted operations.',
    color: 'emerald',
  },
  {
    period: 'Jun 2020 – Jul 2021',
    title: 'German Language Expert',
    org: 'Concentrix · Pune',
    body: 'Supported customers in German and English. Ran monthly training that cut average chat resolution time by 15%, and was promoted to a senior role within the year.',
    color: 'amber',
  },
]

export const skills = [
  {
    title: 'Agentic AI',
    color: 'cyan',
    items: ['Multi-agent systems', 'Tool calling', 'MCP', 'RAG', 'Context engineering', 'Human-in-the-loop', 'Pydantic validation', 'Strands Agents SDK', 'Google ADK', 'LangChain'],
  },
  {
    title: 'LLMs & evaluation',
    color: 'violet',
    items: ['Claude', 'AWS Bedrock', 'OpenAI', 'Gemini', 'Groq', 'ChromaDB', 'Eval & regression sets', 'Tracing & observability'],
  },
  {
    title: 'Engineering',
    color: 'emerald',
    items: ['Python', 'TypeScript', 'SQL', 'FastAPI', 'Hono', 'React', 'REST APIs', 'Webhooks', 'OAuth', 'Docker', 'pytest', 'Vitest'],
  },
  {
    title: 'Scraping & data',
    color: 'amber',
    items: ['Scrapy', 'Playwright', 'Selenium', 'BeautifulSoup', 'pandas', 'PDF extraction & OCR'],
  },
  {
    title: 'Cloud & integrations',
    color: 'pink',
    items: ['AWS Lambda', 'EC2', 'Google Cloud Run', 'Vertex AI', 'CI/CD', 'n8n', 'Make', 'Zapier', 'Slack API', 'WhatsApp Business API', 'ClickUp'],
  },
  {
    title: 'AI-assisted development',
    color: 'cyan',
    items: ['Claude Code (daily)', 'Cursor', 'Codex'],
  },
]
