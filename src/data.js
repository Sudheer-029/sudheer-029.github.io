export const person = {
  name: 'Sudheer Bishnoi',
  roles: ['AI Engineer', 'GenAI Specialist', 'eCommerce Operations', 'Account Manager'],
  tagline: '87 tools built. 400+ daily users. Top 1% globally. AI Operations Specialist at Amazon.',
  sub: 'I spend my days building internal tools that save people time — MCP servers, RAG systems, small automations. This is a small collection of that work.',
  email: 'sudheerdudi00@gmail.com',
  linkedin: 'https://linkedin.com/in/sudheer-bishnoi',
  github: 'https://github.com/Sudheer-029',
  location: 'Bengaluru, India',
  status: 'Currently at Amazon \u00b7 Open to the right opportunity',
}

export const stats = [
  { value: 87,    suffix: '',   label: 'AI Tools Built',        sub: 'MCP Server · Claude AI' },
  { value: 400,   suffix: '+',  label: 'Daily AI Users',        sub: 'RAG System · Bedrock' },
  { value: 7724,  suffix: '',   label: 'Verified Savings ($)',  sub: 'Formally approved' },
  { value: 0.9,   suffix: '%',  label: 'Global Rank',           sub: '182 of 19,799 · Hackathon' },
  { value: 200,   suffix: '+',  label: 'Vendors / Month',       sub: '8 EU Marketplaces' },
]

export const timeline = [
  {
    year: '2021',
    title: 'Joined Amazon Vendor Services',
    body: 'Started as Catalog Specialist managing EU marketplace listings — UK, DE, FR, ES, IT, NL, SE, BE. Built deep expertise in EAN/GTIN, brand registry, variation management, and PO reconciliation.',
    color: 'cyan',
  },
  {
    year: '2022–23',
    title: '$7,724 in Verified Savings',
    body: 'Built Python automation for catalog verification workflows. Formally code-reviewed and approved by senior management. Delivered documented annual cost savings — not an estimate, a signed figure.',
    color: 'emerald',
  },
  {
    year: '2025',
    title: '87-Tool MCP Server',
    body: 'Independently built an 87-tool Model Context Protocol server (Node.js + TypeScript) integrating Amazon enterprise catalog APIs with Claude AI. Reduced investigation time from minutes to seconds.',
    color: 'violet',
  },
  {
    year: '2025',
    title: 'RAG System — Director Approved',
    body: 'Designed and deployed an enterprise RAG application on AWS Bedrock Knowledge Base serving 300–400 daily users. Real-time SOP search, SLA alerting, AI-drafted responses. Presented to and approved by Director-level (L8) leadership.',
    color: 'pink',
  },
  {
    year: '2026',
    title: 'Top 1% Globally',
    body: 'Built ElectaGuide — an AI-powered voter assistance platform in 8 Indian languages — for Prompt Wars v2. Ranked 182 of 19,799 participants across 177 countries. Deployed on Google Cloud Run.',
    color: 'amber',
  },
]

export const caseStudies = [
  {
    id: 1,
    tag: 'Enterprise AI · Internal',
    title: '87-Tool MCP Server',
    subtitle: 'Claude AI + Amazon Catalog APIs',
    problem: 'Catalog investigations required navigating multiple internal systems — each query took minutes of manual lookup across disconnected tools.',
    solution: 'Built an 87-tool MCP server in Node.js + TypeScript integrating Amazon\'s enterprise catalog APIs with Claude AI — enabling natural-language queries, bulk attribute editing, and automated audit workflows.',
    outcome: 'Reduced investigation time from minutes to seconds. Now used daily by operations teams.',
    metrics: [
      { label: 'Tools Built', value: '87' },
      { label: 'Time Saved', value: 'Min → Sec' },
      { label: 'Stack', value: 'Node.js + TS' },
    ],
    color: 'violet',
    icon: '⚡',
  },
  {
    id: 2,
    tag: 'Enterprise AI · Director Approved',
    title: 'RAG System',
    subtitle: 'AWS Bedrock · 300–400 Daily Users',
    problem: 'Operators were spending significant time searching 59 internal SOP documents manually. SLA breaches were going undetected. Vendor responses required manual drafting.',
    solution: 'Designed and deployed an enterprise RAG application using Python + AWS Bedrock Knowledge Base. Real-time SOP search, SLA breach alerting, AI-drafted vendor responses — all in one system.',
    outcome: 'Serving 300–400 daily users. Formally presented to and approved by Director-level (L8) leadership.',
    metrics: [
      { label: 'Daily Users', value: '300–400' },
      { label: 'Documents', value: '59 SOPs' },
      { label: 'Approval', value: 'Director L8' },
    ],
    color: 'cyan',
    icon: '🧠',
  },
  {
    id: 3,
    tag: 'Automation · Verified Savings',
    title: '$7,724 Annual Savings',
    subtitle: 'Python Automation · Management Approved',
    problem: 'Catalog verification workflows were being performed manually — repetitive, error-prone, and consuming significant team hours every week.',
    solution: 'Built Python automation scripts for catalog verification. Formally code-reviewed by senior management and deployed to production.',
    outcome: '$7,724 in verified annual cost savings — documented, signed off, not estimated.',
    metrics: [
      { label: 'Annual Savings', value: '$7,724' },
      { label: 'Status', value: 'Verified' },
      { label: 'Sign-off', value: 'Management' },
    ],
    color: 'emerald',
    icon: '💰',
  },
  {
    id: 4,
    tag: 'Hackathon · Public · Live',
    title: 'ElectaGuide',
    subtitle: 'Top 1% · 182 of 19,799',
    problem: 'India has 968 million registered voters. Most election information exists only in English or dense government PDFs — inaccessible to the majority.',
    solution: 'Built an AI-powered voter assistance platform in 8 Indian languages using Gemini 2.5 Flash + FastAPI + React. Deployed on Google Cloud Run.',
    outcome: 'Ranked 182 of 19,799 participants (Top 1%) in Prompt Wars v2 — an international AI competition across 177 countries.',
    metrics: [
      { label: 'Global Rank', value: 'Top 1%' },
      { label: 'Languages', value: '8 Indian' },
      { label: 'Participants', value: '19,552' },
    ],
    color: 'amber',
    icon: '🏆',
    liveUrl: 'https://electaguide-152578302488.us-central1.run.app',
    githubUrl: 'https://github.com/Sudheer-029/promptwars-v2',
  },
]

export const projects = [
  {
    title: 'WhatsApp Review Automation',
    desc: 'Smart review funnel for local businesses. 4–5 stars → Google Review. 1–3 stars → private owner feedback. Dashboard with full activity log. No app download required.',
    tech: ['WhatsApp API', 'Sentiment Routing', 'Dashboard', 'Node.js'],
    github: 'https://github.com/Sudheer-029/whatsapp-review-automation',
    color: 'emerald',
    icon: '📱',
  },
  {
    title: 'AI Troubleshoot Bot',
    desc: 'Built in 24 hours. Human-in-the-loop incident response in Slack. /troubleshoot → Claude AI suggests 3 fixes → human approves → bot executes or escalates.',
    tech: ['AWS Bedrock', 'Slack Bolt API', 'Python', 'HITL'],
    github: 'https://github.com/Sudheer-029/slack-troubleshoot-bot',
    color: 'violet',
    icon: '🤖',
  },
  {
    title: 'Amazon Catalog → JSON-LD',
    desc: 'Transforms SP-API product data into Schema.org JSON-LD for Google Rich Results, Shopify DTC, and TikTok Shop feeds. Used in production achieving 100% Rich Results pass rate.',
    tech: ['Python', 'Amazon SP-API', 'Schema.org', 'TikTok Shop'],
    github: 'https://github.com/Sudheer-029/amazon-jsonld-pipeline',
    color: 'cyan',
    icon: '🔗',
  },
  {
    title: 'Multi-Agent Travel Planner',
    desc: 'Root agent orchestrating 3 sub-agents: places & hotels, transport, itinerary & budget. Production-ready agentic architecture patterns.',
    tech: ['Google ADK', 'Gemini 2.0 Flash', 'Python', 'Multi-Agent'],
    github: 'https://github.com/Sudheer-029/multi-agent-travel-planner',
    color: 'pink',
    icon: '✈️',
  },
  {
    title: 'RAG Deep Learning Assistant',
    desc: 'Wikipedia-grounded Q&A chatbot. Strict context-only answers — if the answer isn\'t in the docs, it says so. Built to demonstrate hallucination-free RAG.',
    tech: ['LangChain', 'ChromaDB', 'Groq Llama-3', 'Gradio'],
    github: 'https://github.com/Sudheer-029/rag-deep-learning-assistant',
    color: 'emerald',
    icon: '📚',
  },
]

export const skills = [
  {
    title: 'AI & GenAI',
    color: 'cyan',
    items: ['AWS Bedrock', 'RAG Pipelines', 'Claude AI', 'GPT-4', 'Gemini 2.5', 'MCP Protocol', 'Google ADK', 'Multi-Agent Orchestration', 'Prompt Engineering', 'Evaluation Pipelines'],
  },
  {
    title: 'eCommerce & PIM',
    color: 'emerald',
    items: ['Amazon Vendor Central', 'Seller Central', 'Catalog Management', 'EAN / GTIN', 'Brand Registry', 'A+ Content', 'Akeneo PIM', 'Google Merchant Center', 'JSON-LD / Schema.org', 'TikTok Shop'],
  },
  {
    title: 'Engineering',
    color: 'violet',
    items: ['Python', 'Node.js', 'TypeScript', 'REST APIs', 'SQL', 'Git', 'Slack Bolt API', 'FastAPI', 'LangChain', 'ChromaDB'],
  },
  {
    title: 'Cloud & Tools',
    color: 'amber',
    items: ['AWS (S3, Bedrock, QuickSight)', 'Google Cloud (Vertex AI, Cloud Run)', 'Azure (AZ-900)', 'Power BI', 'Profitero', 'Helium 10', 'N8N'],
  },
]

export const perspectives = [
  {
    role: 'AI Engineer',
    color: 'cyan',
    icon: '⚡',
    headline: 'Ships production AI, not prototypes.',
    points: [
      '87-tool MCP server — Claude AI + enterprise APIs',
      'RAG system serving 300–400 daily users',
      'Multi-agent orchestration — Google ADK + Gemini 2.5',
      'AI evaluation pipelines for hallucination + safety',
      'Director-level approval on enterprise deployment',
    ],
    resume: '/resumes/Sudheer_Bishnoi_AI.pdf',
  },
  {
    role: 'eCommerce Manager',
    color: 'emerald',
    icon: '🛒',
    headline: '5 years managing catalog at Amazon scale.',
    points: [
      '200+ vendor accounts per month across 8 EU marketplaces',
      '100% Google Rich Results pass rate — zero errors',
      '$7,724 verified savings through workflow automation',
      'Full TikTok Shop + Shopify syndication pipeline',
      'Profitero · Helium 10 · A+ Content · Brand Registry',
    ],
    resume: '/resumes/Sudheer_Bishnoi_eCommerce.pdf',
  },
  {
    role: 'Account Manager',
    color: 'violet',
    icon: '🤝',
    headline: 'Client-first, data-driven, zero missed SLAs.',
    points: [
      'Primary contact for 200+ enterprise vendor accounts',
      'AI-powered support system — 300–400 daily interactions',
      'Full onboarding lifecycle: EAN, catalog, compliance',
      'Trained & mentored 10+ team members',
      '15% reduction in average resolution time',
    ],
    resume: '/resumes/Sudheer_Bishnoi_AccountManager.pdf',
  },
]
