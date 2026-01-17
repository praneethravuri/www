export const data = {
    firstName: "Praneeth",
    lastName: "Ravuri",
    location: "San Francisco, USA",
    url: "https://praneethravuri.com",
    title: "AI Engineer",
    summary: "AI Engineer building autonomous systems and backend infrastructure. Work spans agentic AI, distributed systems, and production deployments. Python, Go, TypeScript.",

    about:
        "I build AI agents that run in production, not just demos. Started at GRIET in India, then went to George Mason for grad school where I got into distributed systems and ML. A traffic signal RL project got me hooked on software that makes decisions instead of just moving data around. Now I work on agents that handle cybersecurity investigations: pulling context from multiple systems, storing useful history, and taking action when needed. Before that, I built backend services at Lumen that processed millions of network flows per minute. I like systems that stay stable under load and don't waste computation. When I'm not coding, I'm probably optimizing something else. Lately it's been race strategies for F1.",

    tagline: "Building AI systems that work past the demo stage. Memory, safeguards, and infrastructure that holds up in production.",
    keywords: [
        "Agentic AI",
        "Distributed Systems",
        "Python",
        "Go",
        "TypeScript",
        "AWS",
        "Kubernetes",
        "Kafka",
        "Vector Databases",
        "Neo4j",
        "React",
        "Node.js",
        "PostgreSQL",
        "MongoDB",
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
            startDate: "December 2025",
            endDate: "Present",
            location: "United States",
            description:
                "Building AI agents that investigate security alerts, pull data from multiple systems, and recommend fixes. The agents run continuously and need to stay accurate over long sessions without drifting.",
            deepInsight:
                "Long-running agents lose context fast. I built a memory layer that separates what the agent needs to remember long-term from what it's currently thinking about. Old investigations get summarized and stored so the agent can reference them without carrying forward bad assumptions. I also optimized our MCP servers to filter data before it hits the LLM. This cuts token usage and keeps responses consistent across different client environments.",
            technologies: ["Agentic AI", "Distributed Systems", "MCP", "Python", "Go", "AWS", "Kubernetes", "PostgreSQL", "Neo4j", "Pinecone"]
        },

        {
            company: "Lumen Technologies",
            companyUrl: "https://lumen.com",
            title: "Software Engineer",
            startDate: "July 2024",
            endDate: "December 2025",
            location: "United States",
            description:
                "Built backend services for a network traffic platform that processed millions of flows per minute. Had to keep the system stable under high load while handling continuous data ingestion and analysis.",
            deepInsight:
                "When you're processing that much data, small mistakes get expensive fast. Used Kafka to decouple ingestion from processing so one bottleneck wouldn't bring down the whole pipeline. Spent a lot of time on backpressure handling with Go's channels and making sure partitions stayed balanced. Buffered channels absorbed traffic spikes, and load balancing kept consumers from choking during peak periods. Zero data loss across all deployments.",
            technologies: ["Go", "Kafka", "MongoDB", "Docker", "Kubernetes"]
        },

        {
            company: "ADP",
            companyUrl: "https://adp.com",
            title: "Full Stack Engineer Intern",
            startDate: "January 2022",
            endDate: "June 2022",
            location: "India",
            description:
                "Modernized a legacy employee portal. Redesigned the frontend and sped up backend responses to handle higher loads.",
            deepInsight:
                "Added Redis caching to cut down on repeated database reads. Response times dropped and the system handled peak traffic better. Learned that a polished frontend doesn't matter much if the backend is slow.",
            technologies: ["React", "Node.js", "Redis", "JavaScript"]
        }
    ],

    projects: [
        {
            name: "Gary",
            url: "https://github.com/praneethravuri/gary",
            description:
                "Agent that rewrites resumes to match specific job descriptions. Takes your base resume and outputs a tailored PDF or Word doc.",
            tags: ["Agentic AI", "Context Engineering", "LLMs"],
            problem:
                "Manually tweaking resumes for every application takes forever and most tools just do basic keyword stuffing.",
            solution:
                "Built a multi-step workflow that extracts what the role actually wants, figures out the tone they're looking for, and rewrites your experience to match. Keeps your narrative consistent while hitting the right keywords.",
            outcome:
                "Saves hours per application. Resumes get past ATS filters and actually get read by recruiters.",
            techStack: ["Crew AI", "MongoDB", "GCP"]
        },

        {
            name: "Pitstop",
            url: "https://github.com/praneethravuri/pitstop",
            description:
                "Connects live F1 telemetry to an LLM so you can ask questions about the race as it happens.",
            tags: ["MCP", "Streaming Data", "LLMs"],
            problem:
                "Live F1 data is scattered across multiple screens and hard to interpret during a race.",
            solution:
                "Built an MCP server that pulls high-frequency WebSocket updates and formats them for an LLM. Filters out noise and only forwards useful signals like lap times, tire degradation, and pit windows.",
            outcome:
                "Turns raw telemetry into something you can actually talk to. Ask about tire strategy or race pace without switching between dashboards.",
            techStack: ["FastMCP", "HttpX"]
        },

        {
            name: "Smart Traffic",
            url: "https://github.com/praneethravuri/traffic-congestion-reduction-with-SARSA",
            description:
                "RL simulation that adjusts traffic light timing based on real-time queue lengths.",
            tags: ["Reinforcement Learning", "Python"],
            problem:
                "Fixed-timer intersections don't adapt to actual traffic and waste time on empty lanes.",
            solution:
                "Modeled an intersection and trained an agent with SARSA. It watches queue lengths and learns when to switch lights instead of following a preset schedule.",
            outcome:
                "Beat static timers on average wait times. This project got me into RL and changed how I think about decision-making systems.",
            techStack: ["NumPy", "Pygame", "Matplotlib"]
        },

        {
            name: "Notstuck",
            url: "https://github.com/praneethravuri/notstuck",
            description:
                "Hybrid search RAG system for pulling answers out of long technical docs.",
            tags: ["RAG", "Hybrid Search", "TypeScript"],
            problem:
                "Keyword search chokes on vague queries. Semantic search misses exact technical terms. Both suck in different ways.",
            solution:
                "Combined vector similarity with keyword filtering to find the right sections, then generate answers with citations. Gets the best of both approaches.",
            outcome:
                "Cuts down time spent scrolling through PDFs. You get answers with sources instead of hunting through hundreds of pages.",
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
