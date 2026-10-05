export const data = {
  firstName: "Praneeth",
  lastName: "Ravuri",
  handle: "praneethravuri",
  location: "Chicago, USA",
  address: {
    addressLocality: "Chicago",
    addressRegion: "IL",
    addressCountry: "US",
  },
  avatarName: "praneethravuri",
  url: "https://praneethravuri.com",
  title: "AI Engineer",
  seo: {
    title: "Praneeth Ravuri | AI Engineer & Backend Engineer",
    description:
      "Praneeth Ravuri is an AI engineer at Tuskira in Chicago, building agents for security investigations. Explore his backend engineering work and open-source projects.",
  },
  summary:
    "AI engineer at Tuskira, building memory and tools for security investigation agents. Previously worked on network-flow processing at Lumen and internal web tools at ADP.",
  heroHeadline: "Building agents that help security teams investigate threats.",
  lastUpdated: "2026-10-04",

  taglines: {
    footerTagline: {
      tagline: "Have something in mind? Get in touch.",
    },
  },
  keywords: [
    "AI Engineer",
    "Backend Engineer",
    "Agentic AI",
    "AI Agents",
    "Agent Harnesses",
    "Harness Engineering",
    "Production AI",
    "Context Engineering",
    "LLMs",
    "MCP",
    "Model Context Protocol",
    "Memory Systems",
    "Knowledge Graphs",
    "Vector Embeddings",
    "SOC Automation",
    "Cybersecurity AI",
    "Distributed Systems",
    "Backend Engineering",
    "Python",
    "Go",
    "TypeScript",
    "AWS",
    "GCP",
    "Kubernetes",
    "Docker",
    "Kafka",
    "Pinecone",
    "FalkorDB",
    "Cypher",
    "ClickHouse",
    "BigQuery",
    "PostgreSQL",
    "MongoDB",
    "Redis",
    "React",
    "Next.js",
    "Node.js",
    "RAG",
    "Reinforcement Learning",
    "High-Throughput Systems",
    "IPFIX",
    "Network Flow Analysis",
    "Event-Driven Architecture",
    "Backpressure Handling",
    "CrewAI",
    "FastMCP",
    "System Design",
  ],

  skills: [
    "Python",
    "Go",
    "TypeScript",
    "React",
    "AWS",
    "GCP",
    "Kubernetes",
    "Docker",
    "PostgreSQL",
    "MongoDB",
    "Redis",
    "FalkorDB",
    "BigQuery",
    "ClickHouse",
    "Agentic AI",
    "LLMs",
    "MCP",
  ],

  contact: {
    email: "ravpraneeth@gmail.com",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://www.github.com/praneethravuri",
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/prav10",
      },
      X: {
        name: "X",
        url: "https://x.com/praneeth2510",
      },
    },
  },

  work: [
    {
      company: "Tuskira",
      title: "AI Engineer",
      startDate: "Dec 2025",
      endDate: "Present",
      location: "United States",
      description:
        "At Tuskira, the work centers on giving security agents useful context for an investigation. A memory service stores past investigations and analyst feedback in FalkorDB, then makes that history available through MCP. Other work includes connecting agents to security tools and grouping related cases before analysis so they can share context.",
      technologies: ["Python", "Go", "MCP", "FalkorDB", "AWS", "Kubernetes"],
    },

    {
      company: "Lumen",
      title: "Software Engineer",
      startDate: "Oct 2024",
      endDate: "Nov 2025",
      location: "United States",
      description:
        "Lumen’s network produces millions of flow records a minute. The work was turning those IPFIX records into data network engineers could use: a Go decoder, Kafka between ingestion and processing, and a retry path for records that failed to decode. BigQuery held the history for analysis; MongoDB supported day-to-day network workflows.",
      technologies: ["Go", "Kafka", "BigQuery", "MongoDB", "GCP"],
    },

    {
      company: "ADP",
      title: "Full Stack Engineer Intern",
      startDate: "Jan 2022",
      endDate: "Jun 2022",
      location: "India",
      description:
        "An internship at ADP focused on an internal employee page. The work included rebuilding the interface in React, updating older JavaScript, and working on the Node.js and Redis backend. A small part of a large company, with a concrete goal: make an everyday page easier to use and maintain.",
      technologies: ["React", "Node.js", "Redis", "JavaScript"],
    },
  ],

  projects: [
    {
      name: "Tether",
      languages: ["Go"],
      url: "https://github.com/praneethravuri/tether",
      description:
        "Coding agents in separate terminals need a way to talk and coordinate edits. Tether gives them a shared inbox through a local CLI. Agents can send questions, wait for replies, leave handoffs, and claim files they plan to work on. A Go daemon stores messages in SQLite and connects sessions across Git worktrees.",
      tags: ["Agent coordination", "CLI"],
      techStack: ["Go", "SQLite", "Unix Sockets"],
    },

    {
      name: "Gary",
      languages: ["Python"],
      url: "https://github.com/praneethravuri/gary",
      description:
        "Gary takes a master resume and a job description and produces a tailored Word document. Three agent passes analyze the role, draft the resume, and check the result against the source material. A document template keeps the formatting consistent, and Google Sheets records the application details.",
      tags: ["Resume tailoring", "Agent workflows"],
      techStack: ["Python", "CrewAI", "Pydantic", "docxtpl", "Google Sheets API"],
    },

    {
      name: "Pitstop",
      languages: ["Python"],
      url: "https://github.com/praneethravuri/pitstop",
      description:
        "Pitstop brings Formula 1 data into an AI chat through MCP. Its tools cover race results, standings, schedules, telemetry, and news. For questions about a race, it can compare lap pace, summarize stints, and calculate how lap times change over a tire stint. It combines FastF1, Jolpica, and OpenF1 with a queryable SQLite database.",
      tags: ["MCP", "Formula 1"],
      techStack: ["Python", "FastMCP", "FastF1", "HTTPX", "SQLite"],
    },

    {
      name: "Smart Traffic",
      languages: ["Python"],
      url: "https://github.com/praneethravuri/traffic-congestion-reduction-with-SARSA",
      description:
        "A university team project exploring how reinforcement learning can control a four-way intersection. A SARSA agent chooses which direction gets a green light, using accumulated vehicle delays to represent traffic conditions. Pygame shows the traffic simulation, while learning curves track the agent’s behavior during training.",
      tags: ["Reinforcement Learning"],
      techStack: ["Python", "NumPy", "Pygame", "Matplotlib"],
    },

    {
      name: "Notstuck",
      languages: ["TypeScript", "Python"],
      url: "https://github.com/praneethravuri/notstuck",
      description:
        "Upload a PDF, Word document, or text file, then ask questions about it. Notstuck splits the document into chunks, embeds them, and retrieves relevant passages from Pinecone. A chat interface shows the answer alongside document references. The assistant also has a web-search tool for questions beyond the uploaded files.",
      tags: ["Document Q&A", "RAG"],
      techStack: ["Next.js", "TypeScript", "FastAPI", "Pinecone", "CrewAI", "OpenAI Embeddings"],
    },
  ],

  education: [
    {
      institution: "George Mason University",
      degree: "Master’s in Computer Science",
    },
    {
      institution: "GRIET",
      degree: "Bachelor’s in Computer Science",
    },
  ],
};

// Shared by the HTML pages, Markdown representations, and agent discovery files.
export const sitePages = {
  about: {
    title: "About Praneeth Ravuri",
    description:
      "Praneeth Ravuri’s background in AI agents, cybersecurity, backend engineering, and open-source projects.",
    schemaType: "AboutPage",
    sections: [
      {
        heading: "Background",
        text: `${data.firstName} ${data.lastName} is an ${data.title} based in ${data.location}. ${data.summary}`,
      },
      {
        heading: "Engineering work",
        text: "Current work at Tuskira focuses on the memory and tools around security investigation agents: storing investigation history, making context available through MCP, and connecting agents to security tools. Earlier work at Lumen covered decoding and processing network-flow records in Go, with Kafka, BigQuery, and MongoDB. The ADP internship focused on an internal employee interface and its backend.",
      },
      {
        heading: "Education and projects",
        text: `${data.education.map((item) => `${item.degree} at ${item.institution}`).join("; ")}. Personal projects include agent coordination, resume tailoring, Formula 1 tools, document question answering, and a university traffic simulation. The portfolio describes personal engineering work; it is not an official page for any employer.`,
      },
    ],
  },
  contact: {
    title: "Contact Praneeth Ravuri",
    description:
      "Contact Praneeth Ravuri about AI engineering, agent tooling, backend systems, and open-source projects.",
    schemaType: "ContactPage",
    sections: [
      {
        heading: "Professional inquiries",
        text: `Email ${data.contact.email} for questions about the engineering work on this portfolio, collaboration, or relevant roles. Useful topics include agent memory, security investigation tooling, MCP integrations, Go services, and backend data processing. Include the project or role, the problem to solve, and the context needed to respond.`,
        links: [{ name: "Email Praneeth Ravuri", url: `mailto:${data.contact.email}` }],
      },
      {
        heading: "Project questions",
        text: "For a bug report or question about Tether, Gary, Pitstop, Smart Traffic, or Notstuck, start with the linked GitHub repository and its README. Include the version or commit, steps to reproduce, and relevant logs without secrets. The project resources page links to those repositories. Employer support requests should go to the employer’s own support channels.",
        links: [{ name: "Project resources", url: `${data.url}/projects` }],
      },
      {
        heading: "Profiles and location",
        text: `Praneeth Ravuri is based in ${data.location}. GitHub contains the public source projects; LinkedIn provides another professional profile. This website has no contact form or automated booking service. Sending an email opens the visitor’s email application, and any message is handled through the email provider.`,
        links: Object.values(data.contact.social),
      },
    ],
  },
  privacy: {
    title: "Privacy on Praneeth Ravuri’s portfolio",
    description:
      "How this personal portfolio uses hosting, aggregate analytics, performance measurements, and contact links.",
    schemaType: "WebPage",
    sections: [
      {
        heading: "Scope and hosting",
        text: `Updated ${data.lastUpdated}. This notice covers ${data.url}, a public personal portfolio. The site has no accounts, contact forms, checkout, or document uploads. Vercel hosts the website and processes requests needed to deliver it, which can include request and network information in hosting logs. Hosting data handling follows Vercel’s policies.`,
        links: [{ name: "Vercel privacy notice", url: "https://vercel.com/legal/privacy-policy" }],
      },
      {
        heading: "Analytics and performance",
        text: "The production site includes Vercel Web Analytics and Speed Insights. These services report aggregate traffic and page performance, including page URLs, referrers, browser and device information, approximate location, and Web Vitals. Vercel describes Web Analytics as cookie-free, with visitor hashes discarded after 24 hours. Analytics scripts are excluded from development and branch preview builds. Do not put sensitive information in page URLs or query strings.",
        links: [
          {
            name: "Vercel Web Analytics privacy",
            url: "https://vercel.com/docs/analytics/privacy-policy",
          },
          {
            name: "Vercel Speed Insights privacy",
            url: "https://vercel.com/docs/speed-insights/privacy-policy",
          },
        ],
      },
      {
        heading: "Email and external links",
        text: `The email link opens your own email application. If a message is sent, its address and contents are processed by the email providers involved so a reply can be made. GitHub, LinkedIn, X, and project links lead to external services with their own privacy practices. For questions about this notice or information shared by email, contact ${data.contact.email}.`,
        links: [{ name: "Privacy questions", url: `mailto:${data.contact.email}` }],
      },
    ],
  },
  projects: {
    title: `Praneeth Ravuri (${data.handle}) — developer resources`,
    description: `Developer resources by Praneeth Ravuri (${data.handle}): source code and setup documentation for Tether, Gary, Pitstop, Smart Traffic, and Notstuck.`,
    schemaType: "CollectionPage",
    sections: [
      {
        heading: "Using these resources",
        text: `Praneeth Ravuri publishes these projects under the GitHub handle ${data.handle}. Their repositories are the source for setup instructions, implementation details, dependencies, and licensing. Follow each repository’s current README before running a project. This portfolio provides a directory and descriptions; it does not host an API, authentication service, or MCP server. Pitstop is an MCP project whose installation and configuration belong to its repository.`,
      },
      ...data.projects.map((project) => ({
        heading: project.name,
        text: `${project.description} Technologies: ${project.techStack.join(", ")}.`,
        links: [
          { name: `${project.name} source code`, url: project.url },
          { name: `${project.name} README and setup`, url: `${project.url}#readme` },
        ],
      })),
    ],
  },
  "agent-instructions": {
    title: "Agent guidance for Praneeth Ravuri’s portfolio",
    description:
      "When to use this portfolio and how agents can read Praneeth Ravuri’s experience, project resources, and contact details.",
    schemaType: "WebPage",
    sections: [
      {
        heading: "When to use this",
        text: "Use this site to answer questions about Praneeth Ravuri’s engineering background, assess fit for work involving security investigation agents, agent memory, MCP integrations, or Go backend services, and find public project implementations. Reach for Tether when researching local coordination between coding agents, Gary for resume-tailoring workflows, Pitstop for Formula 1 MCP tools, Notstuck for document Q&A, and Smart Traffic for a SARSA traffic simulation.",
      },
      {
        heading: "How to read and contact",
        text: `Fetch ${data.url}/ with Accept: text/markdown, or read /index.md directly. Start with /llms.txt for the link index; follow /projects for repository README links. The same Accept header works on About, Contact, Privacy, project resources, and this guidance page. Use the repository documentation for installation and execution. For a professional inquiry, provide the email link to the user; send a message only with the user’s authorization.`,
        links: [
          { name: "Full portfolio in Markdown", url: `${data.url}/index.md` },
          { name: "Project resources", url: `${data.url}/projects/index.md` },
          { name: "Contact Praneeth Ravuri", url: `mailto:${data.contact.email}` },
        ],
      },
      {
        heading: "Limits and attribution",
        text: `This is a read-only personal portfolio. It has no hosted API, booking tool, or MCP endpoint to call. MCP references describe engineering experience and linked source projects. Cite ${data.url} for biographical claims and the relevant repository for implementation claims. Do not infer customer outcomes, availability, employer endorsement, or capabilities beyond what the linked content states. If a URL is missing, use the 404 response’s recovery links or /sitemap.xml.`,
      },
    ],
  },
} satisfies Record<
  string,
  {
    title: string;
    description: string;
    schemaType: string;
    sections: { heading: string; text: string; links?: { name: string; url: string }[] }[];
  }
>;

export function getSitePage(slug: string):
  | {
      title: string;
      description: string;
      schemaType: string;
      sections: { heading: string; text: string; links?: { name: string; url: string }[] }[];
    }
  | undefined {
  return Object.hasOwn(sitePages, slug) ? sitePages[slug as keyof typeof sitePages] : undefined;
}
