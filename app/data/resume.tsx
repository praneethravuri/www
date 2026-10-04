export const data = {
  firstName: "Praneeth",
  lastName: "Ravuri",
  location: "Chicago, USA",
  avatarUrl: "/blobatar.svg",
  url: "https://praneethravuri.com",
  title: "AI Engineer",
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
      Resume: {
        name: "Résumé",
        url: "https://docs.google.com/document/d/1Ue.../edit?usp=sharing",
      },
    },
  },

  work: [
    {
      company: "Tuskira",
      title: "AI Engineer",
      startDate: "Dec 2025",
      endDate: "Present",
      logoUrl: "/images/logos/tuskira_logo.webp",
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
      logoUrl: "/images/logos/lumen_logo.webp",
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
      logoUrl: "/images/logos/adp_logo.webp",
      location: "India",
      description:
        "An internship at ADP focused on an internal employee page. The work included rebuilding the interface in React, updating older JavaScript, and working on the Node.js and Redis backend. A small part of a large company, with a concrete goal: make an everyday page easier to use and maintain.",
      technologies: ["React", "Node.js", "Redis", "JavaScript"],
    },
  ],

  projects: [
    {
      name: "Tether",
      url: "https://github.com/praneethravuri/tether",
      description:
        "Coding agents in separate terminals need a way to talk and coordinate edits. Tether gives them a shared inbox through a local CLI. Agents can send questions, wait for replies, leave handoffs, and claim files they plan to work on. A Go daemon stores messages in SQLite and connects sessions across Git worktrees.",
      tags: ["Agent coordination", "CLI"],
      techStack: ["Go", "SQLite", "Unix Sockets"],
    },

    {
      name: "Gary",
      url: "https://github.com/praneethravuri/gary",
      description:
        "Gary takes a master resume and a job description and produces a tailored Word document. Three agent passes analyze the role, draft the resume, and check the result against the source material. A document template keeps the formatting consistent, and Google Sheets records the application details.",
      tags: ["Resume tailoring", "Agent workflows"],
      techStack: ["Python", "CrewAI", "Pydantic", "docxtpl", "Google Sheets API"],
    },

    {
      name: "Pitstop",
      url: "https://github.com/praneethravuri/pitstop",
      description:
        "Pitstop brings Formula 1 data into an AI chat through MCP. Its tools cover race results, standings, schedules, telemetry, and news. For questions about a race, it can compare lap pace, summarize stints, and calculate how lap times change over a tire stint. It combines FastF1, Jolpica, and OpenF1 with a queryable SQLite database.",
      tags: ["MCP", "Formula 1"],
      techStack: ["Python", "FastMCP", "FastF1", "HTTPX", "SQLite"],
    },

    {
      name: "Smart Traffic",
      url: "https://github.com/praneethravuri/traffic-congestion-reduction-with-SARSA",
      description:
        "A university team project exploring how reinforcement learning can control a four-way intersection. A SARSA agent chooses which direction gets a green light, using accumulated vehicle delays to represent traffic conditions. Pygame shows the traffic simulation, while learning curves track the agent’s behavior during training.",
      tags: ["Reinforcement Learning"],
      techStack: ["Python", "NumPy", "Pygame", "Matplotlib"],
    },

    {
      name: "Notstuck",
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
      logoUrl: "/images/logos/gmu.webp",
    },
    {
      institution: "GRIET",
      degree: "Bachelor’s in Computer Science",
      logoUrl: "/images/logos/griet.webp",
    },
  ],
};
