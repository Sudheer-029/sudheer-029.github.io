export const person = {
  name: 'Sudheer Bishnoi',
  roles: ['AI Automation Engineer', 'E-commerce Operations', 'Shopify Solutions'],
  tagline: 'E-commerce operations, Shopify solutions and practical AI automation.',
  sub: 'I design and build workflows that improve catalogue quality, connect business systems and reduce repetitive operational work — with validation and human review where it matters.',
  email: 'sudheerdudi00@gmail.com',
  linkedin: 'https://www.linkedin.com/in/sudheer-bishnoi',
  github: 'https://github.com/Sudheer-029',
  location: 'India',
  status: 'AI Automation Engineer · Acumen Operators',
}

export const stats = []

export const timeline = [
  {
    year: 'Aug 2026 – Present',
    title: 'AI Automation Engineer · Acumen Operators',
    body: 'Designing and delivering AI-enabled automation for e-commerce and operational workflows. Focus areas include LLM integrations, APIs, workflow orchestration, data validation, exception handling and human approval.',
    color: 'cyan',
  },
  {
    year: 'Jun 2025 – 2026',
    title: 'Catalog Specialist I – Machine Learning · Amazon',
    body: 'Worked across European Vendor Services marketplaces, combining catalogue operations expertise with process improvement and automation.',
    color: 'violet',
  },
  {
    year: 'May 2022 – Jun 2025',
    title: 'Catalog Associate – German · Amazon',
    body: 'Built hands-on experience in marketplace catalogue quality, product data, listing workflows and vendor support across European marketplaces.',
    color: 'emerald',
  },
]

export const caseStudies = [
  {
    id: 1,
    tag: 'Shopify · Working proof of concept',
    title: 'AI-Powered Shopify Listing Optimisation',
    subtitle: 'Shopify Admin API · AI-assisted content · Human review',
    problem: 'Product catalogue content can be inconsistent, time-consuming to improve and difficult to maintain at scale.',
    solution: 'Built a working proof of concept that retrieves product information, drafts improved titles and descriptions, generates SEO metadata and tags, and writes approved updates back to Shopify. Existing price, inventory and product imagery are preserved.',
    outcome: 'Demonstrates an assisted listing workflow with human review before updates are applied. Available for a guided walkthrough; the development store is not a public storefront.',
    metrics: [
      { label: 'Workflow', value: 'Read → Draft' },
      { label: 'Review', value: 'Human-led' },
      { label: 'Platform', value: 'Shopify' },
    ],
    color: 'emerald',
    icon: '🛍️',
  },
  {
    id: 2,
    tag: 'Client production solution · Confidential',
    title: 'AI Catalogue Management',
    subtitle: 'E-commerce operations · Data validation · Workflow automation',
    problem: 'Catalogue operations involve repetitive product data processing and quality checks.',
    solution: 'Production workflow supporting product data processing and enrichment, listing content improvement, structured validation and exception handling, with human approval at key steps.',
    outcome: 'In production for a client. Further implementation details are withheld to protect client confidentiality; a high-level walkthrough can be discussed.',
    metrics: [
      { label: 'Status', value: 'Production' },
      { label: 'Focus', value: 'Catalogue' },
      { label: 'Controls', value: 'Validation' },
    ],
    color: 'cyan',
    icon: '📦',
  },
  {
    id: 3,
    tag: 'Client production solution · Confidential',
    title: 'E-commerce Order Automation',
    subtitle: 'Order workflows · Integrations · Operational controls',
    problem: 'Order-related operations can require repeated manual steps across business systems.',
    solution: 'Production workflow automating selected order operations and data hand-offs, with error handling and operational checks.',
    outcome: 'In production for a client. Client identity, data and implementation specifics are not publicly disclosed.',
    metrics: [
      { label: 'Status', value: 'Production' },
      { label: 'Focus', value: 'Orders' },
      { label: 'Controls', value: 'Error checks' },
    ],
    color: 'violet',
    icon: '⚙️',
  },
  {
    id: 4,
    tag: 'Open source · Live',
    title: 'GST AutoFlow',
    subtitle: 'Python · Streamlit · Document processing',
    problem: 'GST reconciliation often involves repetitive matching and extracting information from business documents.',
    solution: 'Built a tool for GST data reconciliation and invoice information extraction.',
    outcome: 'Public project with source code and a live demo.',
    metrics: [
      { label: 'Platform', value: 'Streamlit' },
      { label: 'Code', value: 'Open source' },
      { label: 'Demo', value: 'Live' },
    ],
    color: 'amber',
    icon: '₹',
    liveUrl: 'https://gst-autoflow.streamlit.app',
    githubUrl: 'https://github.com/Sudheer-029/gst-autoflow',
  },
]

export const projects = [
  {
    title: 'AI-Powered Shopify Listing Optimisation',
    desc: 'Working proof of concept: retrieves product data, drafts titles and descriptions, generates SEO metadata and tags, and applies reviewed updates while preserving price, inventory and imagery. Walkthrough available on request.',
    tech: ['Shopify Admin API', 'GraphQL', 'AI content generation', 'Human review'],
    color: 'emerald',
    icon: '🛍️',
  },
  {
    title: 'GST AutoFlow',
    desc: 'GST reconciliation and invoice document-processing tool. Public source code and live demo available.',
    tech: ['Python', 'Streamlit', 'pandas', 'PDF processing'],
    github: 'https://github.com/Sudheer-029/gst-autoflow',
    liveUrl: 'https://gst-autoflow.streamlit.app',
    color: 'amber',
    icon: '₹',
  },
  {
    title: 'RAG Deep Learning Assistant',
    desc: 'A retrieval-augmented question-answering assistant designed to ground responses in source documents.',
    tech: ['Python', 'LangChain', 'ChromaDB', 'Groq'],
    github: 'https://github.com/Sudheer-029/rag-deep-learning-assistant',
    color: 'cyan',
    icon: '📚',
  },
]

export const skills = [
  {
    title: 'E-commerce & Shopify',
    color: 'emerald',
    items: ['Shopify Admin API', 'Product catalogue management', 'Listing optimisation', 'Product data enrichment', 'Order workflows', 'Inventory operations', 'Amazon marketplace operations'],
  },
  {
    title: 'AI & LLM Workflows',
    color: 'cyan',
    items: ['Generative AI', 'LLM integrations', 'RAG', 'Prompt engineering', 'AI-assisted content', 'Agentic workflow patterns', 'Human-in-the-loop review'],
  },
  {
    title: 'Automation & Integrations',
    color: 'violet',
    items: ['Python', 'n8n', 'REST APIs', 'GraphQL', 'Workflow orchestration', 'Data processing', 'Validation and error handling'],
  },
  {
    title: 'Cloud & Data',
    color: 'amber',
    items: ['AWS', 'Amazon Bedrock', 'Structured data', 'Reporting and analysis', 'Git', 'SQL'],
  },
]

export const perspectives = [
  {
    role: 'Shopify & E-commerce',
    color: 'emerald',
    icon: '🛒',
    headline: 'Reliable catalogue and operational workflows.',
    points: [
      'Product data and listing optimisation',
      'Shopify API integrations and data updates',
      'Order and inventory workflow improvements',
      'Catalogue quality checks and enrichment',
    ],
  },
  {
    role: 'AI Automation',
    color: 'cyan',
    icon: '⚡',
    headline: 'Practical AI with operational safeguards.',
    points: [
      'LLM-powered assistants and workflow steps',
      'API integrations and multi-step orchestration',
      'Output validation and exception handling',
      'Human approval for important changes',
    ],
  },
  {
    role: 'Agency Partnerships',
    color: 'violet',
    icon: '🤝',
    headline: 'A delivery partner for client projects.',
    points: [
      'White-label implementation support',
      'Project-based automation delivery',
      'Referral and collaboration partnerships',
      'Remote collaboration and in-person engagements',
    ],
  },
]
