export const data = {
    firstName: "Praneeth",
    lastName: "Ravuri",
    location: "San Francisco, USA",
    url: "https://praneethravuri.com",
    title: "AI Engineer",
    summary: "AI Engineer building autonomous agents and distributed systems. Focused on production-grade agentic AI, backend infrastructure, and high-throughput data pipelines. Python, Go, TypeScript.",

    about:
        "I build production AI agents and scalable backend systems. Studied CS at GRIET and George Mason, where a reinforcement learning project shifted my focus to autonomous decision-making systems. Currently working on cybersecurity agents that investigate alerts, query multiple data sources, and maintain context across long sessions. Previously built backend infrastructure at Lumen processing millions of network flows per minute with Kafka and Go. I optimize for reliability under load and efficient resource usage.",

    taglines : {
        heroTagline: {
        role: "AI Engineer",
        company: "Tuskira",
        companyUrl: "https://tuskira.ai",
        logoUrl: "/tuskira_logo.jpeg",
        description: "Building and researching AI agents for cybersecurity",
        },
        experienceTagline: {
            tagline: "From high-throughput data pipelines to autonomous AI agents, building systems that stay reliable under load."
        },
        projectsTagline: {
            tagline: "Projects I've worked on, from AI agents to distributed systems."
        },
        footerTagline: {
            tagline: "Let's put AI to work."
        }
        
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
                name: "Resume",
                url: "https://docs.google.com/document/d/1Ue.../edit?usp=sharing"
            }
        }
    },

    work: [
        {
            company: "Tuskira",
            companyUrl: "https://tuskira.ai",
            title: "AI Engineer",
            startDate: "Dec 2025",
            endDate: "Present",
            logoUrl: "/tuskira_logo.jpeg",
            location: "United States",
            description:
                "Building autonomous AI agents for cybersecurity investigations that query multiple data sources and maintain context across long sessions. Designed a memory layer separating long-term knowledge from active reasoning to prevent context drift, storing summarized investigations in Neo4j and Pinecone for retrieval. Optimized MCP servers in Go and Python to filter data before LLM processing, reducing token usage while maintaining response consistency. Deployed on AWS with Kubernetes for continuous operation across multiple client environments.",
            technologies: ["Agentic AI", "MCP", "Python", "Go", "AWS", "Kubernetes", "PostgreSQL", "Neo4j", "Pinecone"]
        },

        {
            company: "Lumen",
            companyUrl: "https://lumen.com",
            title: "Software Engineer",
            startDate: "Jul 2024",
            endDate: "Dec 2025",
            logoUrl: "/lumen_logo.jpeg",
            location: "United States",
            description:
                "Built backend services processing millions of network flows per minute for traffic analysis platform. Architected event-driven pipeline with Kafka to decouple ingestion from processing, preventing bottlenecks from cascading failures. Implemented backpressure handling in Go using buffered channels to absorb traffic spikes and balanced partition consumption to maintain throughput during peak periods. Deployed with Docker and Kubernetes, achieving zero data loss across all production deployments.",
            technologies: ["Go", "Kafka", "MongoDB", "Docker", "Kubernetes"]
        },

        {
            company: "ADP",
            companyUrl: "https://adp.com",
            title: "Full Stack Engineer Intern",
            startDate: "Jan 2022",
            endDate: "Jun 2022",
            logoUrl: "/adp_logo.jpeg",
            location: "India",
            description:
                "Modernized legacy employee portal handling thousands of daily users. Built React frontend and optimized Node.js backend with Redis caching layer to reduce repeated database queries. Improved response times and stabilized performance during peak traffic periods.",
            technologies: ["React", "Node.js", "Redis", "JavaScript"]
        }
    ],

    projects: [
        {
            name: "Gary",
            url: "https://github.com/praneethravuri/gary",
            description:
                "AI agent that rewrites resumes to match job descriptions without keyword stuffing. Built multi-step workflow with Crew AI that extracts role requirements, analyzes tone, and rewrites experience while maintaining narrative consistency. Outputs tailored PDF/Word docs that pass ATS filters. Deployed on GCP with MongoDB for resume version management.",
            tags: ["Agentic AI", "LLMs"],
            techStack: ["Crew AI", "MongoDB", "GCP"]
        },

        {
            name: "Pitstop",
            url: "https://github.com/praneethravuri/pitstop",
            description:
                "MCP server connecting live F1 telemetry to LLMs for natural language race queries. Processes high-frequency WebSocket streams with FastMCP and HttpX, filtering noise to extract meaningful signals like lap times, tire degradation, and pit windows. Enables conversational queries about race strategy and pace without switching dashboards.",
            tags: ["MCP", "Streaming Data", "LLMs"],
            techStack: ["FastMCP", "HttpX"]
        },

        {
            name: "Smart Traffic",
            url: "https://github.com/praneethravuri/traffic-congestion-reduction-with-SARSA",
            description:
                "Reinforcement learning simulation using SARSA to optimize traffic light timing based on real-time queue lengths. Modeled intersection dynamics with NumPy and Pygame, training agent to learn adaptive switching policies instead of fixed schedules. Reduced average wait times compared to static timers, demonstrating RL for real-time decision-making systems.",
            tags: ["Reinforcement Learning", "Python"],
            techStack: ["NumPy", "Pygame", "Matplotlib"]
        },

        {
            name: "Notstuck",
            url: "https://github.com/praneethravuri/notstuck",
            description:
                "Hybrid search RAG system combining vector similarity and keyword filtering for technical documentation retrieval. Built with Next.js and React frontend, PostgreSQL for metadata, and Pinecone for vector search. Crew AI generates answers with citations, balancing semantic understanding with exact term matching to reduce time spent manually searching PDFs.",
            tags: ["RAG", "Hybrid Search", "TypeScript"],
            techStack: ["React", "Next.js", "PostgreSQL", "Pinecone", "Crew AI"]
        }
    ],

    education: [
        {
            institution: "George Mason University",
            institutionUrl: "https://www2.gmu.edu/",
            degree: "Master’s in Computer Science"
        },
        {
            institution: "GRIET",
            institutionUrl: "https://www.griet.ac.in/",
            degree: "Bachelor’s in Computer Science"
        }
    ]
};
