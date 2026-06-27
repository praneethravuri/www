export const data = {
  firstName: "Praneeth",
  lastName: "Ravuri",
  location: "Chicago, USA",
  url: "https://praneethravuri.com",
  title: "AI Engineer",
  summary:
    "AI engineer building production agents and the harness engineering around them: memory, retrieval, feedback, MCP tooling, and high-throughput backend services.",
  heroHeadline: "Building AI agents and harness engineering for cybersecurity.",
  lastUpdated: "2026-06-13",

  taglines: {
    footerTagline: {
      tagline: "Let’s build AI that works.",
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
    "Hybrid Search",
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
        "Building memory, feedback, and tool systems for SOC investigation agents. Created a FalkorDB-backed memory service that records investigations, stores analyst feedback in a knowledge graph, and exposes retrieval through MCP. Also building MCP servers and case-aggregation workflows that group similar investigations before analysis, improving context quality while cutting tokens and cost.",
      technologies: [
        "Agentic AI",
        "MCP",
        "Python",
        "Go",
        "FalkorDB",
        "Cypher",
        "Vector Embeddings",
        "AWS",
        "Kubernetes",
        "VirusTotal",
        "Cortex XDR",
      ],
    },

    {
      company: "Lumen",
      title: "Software Engineer",
      startDate: "Oct 2024",
      endDate: "Nov 2025",
      logoUrl: "/images/logos/lumen_logo.webp",
      location: "United States",
      description:
        "Built a Go microservice that decodes IPFIX network-flow data at millions-of-flows-per-minute scale. Used goroutines and channels for high-throughput decoding, Kafka to separate ingestion from processing, and a retry path for flows that could not be decoded cleanly. Stored decoded data in BigQuery for historical analysis and MongoDB for operational network-engineer workflows on GCP.",
      technologies: ["Go", "IPFIX", "Kafka", "BigQuery", "MongoDB", "GCP", "Docker", "Kubernetes"],
    },

    {
      company: "ADP",
      title: "Full Stack Engineer Intern",
      startDate: "Jan 2022",
      endDate: "Jun 2022",
      logoUrl: "/images/logos/adp_logo.webp",
      location: "India",
      description:
        "Modernized a legacy internal employee-page experience during an internship. Rebuilt the UI with React, cleaned up older JavaScript patterns, and worked with Node.js and Redis while making the page easier to use and maintain.",
      technologies: ["React", "Node.js", "Redis", "JavaScript"],
    },
  ],

  projects: [
    {
      name: "Gary",
      url: "https://github.com/praneethravuri/gary",
      description:
        "Built for a real job-search workflow, then shaped into a reusable multi-agent resume tool. Gary reads a job description, extracts what matters, compares it with a resume, and drafts tailored sections without stuffing keywords or losing the person’s voice. Outputs PDF and Word docs through a CrewAI workflow.",
      tags: ["Agentic AI", "LLMs"],
      techStack: ["Crew AI", "MongoDB", "GCP"],
    },

    {
      name: "Pitstop",
      url: "https://github.com/praneethravuri/pitstop",
      description:
        "An MCP server that lets an LLM ask questions over F1 telemetry. Pitstop turns race data into clean tool responses for lap times, tire behavior, pit windows, and pace, making strategy questions answerable in plain English. Built with FastMCP and HttpX.",
      tags: ["MCP", "F1 Data"],
      techStack: ["FastMCP", "HttpX"],
    },

    {
      name: "Smart Traffic",
      url: "https://github.com/praneethravuri/traffic-congestion-reduction-with-SARSA",
      description:
        "An adaptive traffic-light simulation inspired by vehicle-actuated control, but with a learning agent. The SARSA agent observes queue lengths and learns when to switch signals, improving wait times over fixed schedules in the simulation. Built with NumPy, Pygame, and Matplotlib.",
      tags: ["Reinforcement Learning"],
      techStack: ["NumPy", "Pygame", "Matplotlib"],
    },

    {
      name: "Notstuck",
      url: "https://github.com/praneethravuri/notstuck",
      description:
        "A RAG project for messy technical docs. It combines vector similarity with keyword filtering so answers can find both meaning and exact terms, then uses CrewAI to produce cited responses. Built to learn what makes retrieval feel trustworthy: metadata, ranking, and visible sources.",
      tags: ["RAG", "Hybrid Search"],
      techStack: ["React", "Next.js", "PostgreSQL", "Pinecone", "Crew AI"],
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
