export const data = {
    firstName: "Praneeth",
    lastName: "Ravuri",
    location: "Chicago, USA",
    url: "https://praneethravuri.com",
    title: "AI Engineer",
    summary: "AI Engineer building autonomous agents and distributed systems. Focused on production-grade agentic AI, backend infrastructure, and high-throughput data pipelines.",

    taglines: {
        heroTagline: {
            role: "AI Engineer",
            company: "Tuskira",
            logoUrl: "/images/logos/tuskira_logo.webp",
            description: "Building Agentic AI and Scalable Systems for Cybersecurity.",
            sub: "I'm an AI Engineer focused on production-grade agentic AI, backend infrastructure, and high-throughput data pipelines. Currently at Tuskira, building Agentic AI and scalable systems for cybersecurity.",
        },
        footerTagline: {
            tagline: "Let's put AI to work."
        },


    },
    keywords: [
        "Agentic AI",
        "LLMs",
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
        "MCP",
        "Vector Databases",
        "Pinecone",
        "Neo4j",
        "PostgreSQL",
        "MongoDB",
        "Redis",
        "React",
        "Next.js",
        "Node.js",
        "RAG",
        "Reinforcement Learning",
        "Cybersecurity",
        "Autonomous Agents",
        "High-Throughput Systems",
        "Traffic Analysis",
        "Event-Driven Architecture",
        "Backpressure Handling",
        "CrewAI",
        "WebSockets",
        "FastMCP",
        "Hybrid Search",
        "Semantic Search",
        "Generative AI",
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
        "Neo4j",
        "FalkorDB",
        "Agentic AI",
        "LLMs",
    ],

    contact: {
        email: "ravpraneeth@gmail.com",
        social: {
            GitHub: {
                name: "GitHub",
                url: "https://www.github.com/praneethravuri"
            },
            LinkedIn: {
                name: "LinkedIn",
                url: "https://www.linkedin.com/in/prav10"
            },
            X: {
                name: "X",
                url: "https://x.com/praneeth2510"
            },
            Resume: {
                name: "Résumé",
                url: "https://docs.google.com/document/d/1Ue.../edit?usp=sharing"
            }
        }
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
                "Building autonomous AI agents for cybersecurity investigations that query many data sources and hold context across long sessions. Designed a memory layer that separates long-term knowledge from active reasoning, storing summarized investigations in Neo4j and Pinecone. Optimized MCP servers in Go and Python to filter data before the LLM, cutting token usage. Deployed on AWS with Kubernetes across multiple client environments.",
            technologies: ["Agentic AI", "MCP", "Python", "Go", "AWS", "Kubernetes", "PostgreSQL", "Neo4j", "Pinecone"]
        },

        {
            company: "Lumen",
            title: "Software Engineer",
            startDate: "Oct 2024",
            endDate: "Nov 2025",
            logoUrl: "/images/logos/lumen_logo.webp",
            location: "United States",
            description:
                "Built backend services processing millions of network flows per minute for a traffic-analysis platform. Architected an event-driven Kafka pipeline that decouples ingestion from processing so failures can’t cascade. Added backpressure in Go with buffered channels to absorb spikes and hold throughput at peak. Shipped on Docker and Kubernetes with zero data loss in production.",
            technologies: ["Go", "Kafka", "MongoDB", "Docker", "Kubernetes"]
        },

        {
            company: "ADP",
            title: "Full Stack Engineer Intern",
            startDate: "Jan 2022",
            endDate: "Jun 2022",
            logoUrl: "/images/logos/adp_logo.webp",
            location: "India",
            description:
                "Modernized a legacy employee portal serving thousands of daily users. Built a React frontend and added a Redis caching layer to the Node.js backend to cut repeated database queries. Improved response times and stabilized performance during peak traffic.",
            technologies: ["React", "Node.js", "Redis", "JavaScript"]
        }
    ],

    projects: [
        {
            name: "Gary",
            url: "https://github.com/praneethravuri/gary",
            description:
                "An AI agent that rewrites résumés to match job descriptions without keyword stuffing. A multi-step Crew AI workflow extracts role requirements, analyzes tone, and rewrites experience while keeping the narrative consistent — outputting tailored PDF/Word docs that pass ATS filters.",
            tags: ["Agentic AI", "LLMs"],
            techStack: ["Crew AI", "MongoDB", "GCP"]
        },

        {
            name: "Pitstop",
            url: "https://github.com/praneethravuri/pitstop",
            description:
                "An MCP server connecting live F1 telemetry to LLMs for natural-language race queries. Processes high-frequency streams with FastMCP and HttpX, filtering noise into signals like lap times, tire degradation, and pit windows — enabling conversational queries about strategy and pace.",
            tags: ["MCP", "Streaming Data"],
            techStack: ["FastMCP", "HttpX"]
        },

        {
            name: "Smart Traffic",
            url: "https://github.com/praneethravuri/traffic-congestion-reduction-with-SARSA",
            description:
                "A reinforcement-learning simulation using SARSA to optimize traffic-light timing from real-time queue lengths. Modeled intersection dynamics with NumPy and Pygame, training an agent to learn adaptive switching policies instead of fixed schedules — reducing average wait times versus static timers.",
            tags: ["Reinforcement Learning"],
            techStack: ["NumPy", "Pygame", "Matplotlib"]
        },

        {
            name: "Notstuck",
            url: "https://github.com/praneethravuri/notstuck",
            description:
                "A hybrid-search RAG system combining vector similarity and keyword filtering for technical-doc retrieval. Built with a Next.js + React frontend, PostgreSQL for metadata, and Pinecone for vectors. Crew AI generates cited answers, balancing semantic understanding with exact-term matching.",
            tags: ["RAG", "Hybrid Search"],
            techStack: ["React", "Next.js", "PostgreSQL", "Pinecone", "Crew AI"]
        }
    ],

    education: [
        {
            institution: "George Mason University",
            degree: "Master’s in Computer Science",
            logoUrl: "/images/logos/gmu.webp"
        },
        {
            institution: "GRIET",
            degree: "Bachelor’s in Computer Science",
            logoUrl: "/images/logos/griet.webp"
        }
    ]
};
