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
  summary: "Fight AI with AI.",
  heroHeadline: "Building agents that help security teams investigate threats.",
  lastUpdated: "2026-10-26",

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
      location: "Chicago, IL, USA",
      description:
        "Building, maintaining, and optimizing SOC agents and the harness around them, working with multiple MCP tools and servers. Also building memory for security investigation agents, storing past investigations and analyst feedback in FalkorDB.",
      technologies: ["Python", "Go", "FalkorDB", "AWS", "Kubernetes", "Postgres"],
    },

    {
      company: "Lumen",
      title: "Software Engineer",
      startDate: "Oct 2024",
      endDate: "Nov 2025",
      location: "Richardson, TX, USA",
      description:
        "Turned millions of IPFIX flow records per minute into data network engineers could use: a Go decoder, Kafka between ingestion and processing, and a retry path for records that failed to decode.",
      technologies: ["Go", "Kafka", "BigQuery", "MongoDB", "GCP"],
    },

    {
      company: "ADP",
      title: "Full Stack Engineer Intern",
      startDate: "Jan 2022",
      endDate: "Jun 2022",
      location: "Hyderabad, IN",
      description:
        "Rebuilt an internal employee page in React with a Node.js and Redis backend, making an everyday page easier to use and maintain.",
      technologies: ["React", "Node.js", "Redis", "JavaScript"],
    },
  ],

  projects: [
    {
      name: "Tether",
      image: "/images/projects/tether-v2.webp",
      imageAlt: "Two isometric computers exchanging messages over an orange connection",
      languages: ["Go"],
      url: "https://github.com/praneethravuri/tether",
      description:
        "A shared inbox for coding agents in separate terminals: send questions, wait for replies, leave handoffs, and claim files, backed by a Go daemon and SQLite.",
      tags: ["Agent coordination", "CLI"],
      techStack: ["Go", "SQLite", "Unix Sockets"],
    },

    {
      name: "Gary",
      image: "/images/projects/gary-v3.webp",
      imageAlt:
        "Resume and job description passing through three processing stages into a tailored resume",
      languages: ["Python"],
      url: "https://github.com/praneethravuri/gary",
      description:
        "Turns a master resume and a job description into a tailored Word document through three agent passes: analyze the role, draft the resume, and check it against the source.",
      tags: ["Resume tailoring", "Agent workflows"],
      techStack: ["Python", "CrewAI", "Pydantic", "docxtpl", "Google Sheets API"],
    },

    {
      name: "Pitstop",
      image: "/images/projects/pitstop-v2.webp",
      imageAlt:
        "Isometric Formula 1 car connected to a computer displaying circuit and telemetry graphs",
      languages: ["Python"],
      url: "https://github.com/praneethravuri/pitstop",
      description:
        "Brings Formula 1 data into AI chat through MCP: results, standings, schedules, telemetry, and news, plus lap-pace comparisons and stint analysis.",
      tags: ["MCP", "Formula 1"],
      techStack: ["Python", "FastMCP", "FastF1", "HTTPX", "SQLite"],
    },

    {
      name: "Traffic Congestion Reduction",
      image: "/images/projects/traffic-congestion-v3.webp",
      imageAlt: "Isometric intersection with four cars, traffic signals, and orange routing arrows",
      languages: ["Python"],
      url: "https://github.com/praneethravuri/traffic-congestion-reduction-with-SARSA",
      description:
        "A university project using a SARSA reinforcement-learning agent to control a four-way intersection's traffic lights.",
      tags: ["Reinforcement Learning"],
      techStack: ["Python", "NumPy", "Pygame", "Matplotlib"],
    },

    {
      name: "Notstuck",
      image: "/images/projects/notstuck-v3.webp",
      imageAlt:
        "Centered documents connected through a search lens to floating question and answer panels",
      languages: ["TypeScript", "Python"],
      url: "https://github.com/praneethravuri/notstuck",
      description:
        "Upload a PDF, Word document, or text file, then ask questions about it: it chunks and embeds the document, retrieves passages from Pinecone, and shows answers with sources.",
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
