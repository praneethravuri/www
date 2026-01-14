export const data = {
    firstName: "Praneeth",
    lastName: "Ravuri",
    url: "https://praneethravuri.com",
    title: "AI Engineer",
    summary: "AI Engineer building autonomous systems and scalable infrastructure. Expert in Agentic AI, Distributed Systems, Python, Go, and TypeScript. Based in the US.",

    about:
        "AI engineer focused on building systems that reason, adapt, and operate with minimal human oversight. I started my computer science journey at GRIET in India, where I built a strong foundation in software engineering, and later continued at George Mason University to push deeper into distributed systems and machine learning. Along the way, a reinforcement learning project—training an agent to manage traffic signals using SARSA—shifted how I thought about software. I stopped seeing systems as static pipelines and started treating them as decision-makers. Since then, my work has centered on autonomous agents that sift through noisy data, retain useful context, and act with intent. I enjoy tightening feedback loops, cutting wasted computation, and designing memory systems that help models stay grounded over time. Outside of work, I apply the same thinking to anything that can be optimized—whether that’s a recipe, a workflow, or a race strategy. My goal is simple: reduce busywork so people can focus on problems that actually require human judgment.",

    tagline: "I build long-running AI systems with memory, guardrails, and infrastructure that does not fall apart once they leave the demo.",
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
                "Designed and built autonomous cybersecurity agents that investigate alerts, correlate signals across systems, and recommend or execute remediation steps. The platform is used to reduce analyst workload while maintaining auditability and control.",
            deepInsight:
                "A recurring challenge with long-running agents was context drift. To address this, I designed a lightweight memory layer that separates durable knowledge from transient reasoning. Past investigations are summarized using smaller models and stored in structured form, allowing agents to reference history without inheriting outdated assumptions. On the infrastructure side, I optimized our MCP servers to filter and shape data before it ever reached an LLM. This reduced token usage, improved response consistency, and made the system easier to adapt across different enterprise domains.",
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
                "Built backend services for a real-time network traffic platform handling millions of flows per minute. The system supported continuous ingestion, aggregation, and downstream analysis under strict reliability constraints.",
            deepInsight:
                "At sustained high throughput, small design decisions compound quickly. To handle the massive influx of concurrent data, I leveraged Kafka as a high-throughput message queue, decoupling ingestion from downstream processing. I focused on predictable data flow and backpressure handling using Go’s concurrency primitives and strategic partition management. Buffered channels helped absorb short traffic spikes, while careful load balancing kept consumers stable during peak load. The result was stable ingestion with zero observed data loss, even during high-variance traffic events.",
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
                "Worked on modernizing a legacy employee portal by redesigning the frontend and improving backend service responsiveness.",
            deepInsight:
                "This role made performance tradeoffs tangible. I introduced Redis-based caching to reduce repeated database reads, which cut response times and smoothed load during peak usage. It reinforced a lesson I still carry: frontend polish only matters if the backend can deliver data quickly and reliably.",
            technologies: ["React", "Node.js", "Redis", "JavaScript"]
        }
    ],

    projects: [
        {
            name: "Gary",
            url: "https://github.com/praneethravuri/gary",
            description:
                "An autonomous agent that tailors resumes end to end, producing ready-to-submit PDF or Word documents aligned to specific job descriptions.",
            tags: ["Agentic AI", "Context Engineering", "LLMs"],
            problem:
                "Manually adjusting resumes for each role is repetitive and error-prone. Most existing tools rely on shallow prompt templates and miss role-specific nuance.",
            solution:
                "Gary uses a multi-step agent workflow to extract role requirements, analyze tone and expectations, and rewrite experience bullets accordingly. The system balances keyword alignment with readability, while maintaining a consistent candidate narrative.",
            outcome:
                "Cuts hours of manual editing per application and produces resumes that perform better in both ATS screening and recruiter review.",
            techStack: ["Crew AI", "MongoDB", "GCP"]
        },

        {
            name: "Pitstop",
            url: "https://github.com/praneethravuri/pitstop",
            description:
                "A real-time data bridge that connects live Formula 1 telemetry to an LLM for conversational race analysis.",
            tags: ["MCP", "Streaming Data", "LLMs"],
            problem:
                "Live F1 data is fragmented across dashboards, making it hard to reason about strategy as the race unfolds.",
            solution:
                "I built an MCP server that streams live telemetry into an LLM-friendly format. The backend handles high-frequency WebSocket updates and selectively forwards relevant signals such as lap times, tire wear, and pit windows.",
            outcome:
                "Transforms fast-moving telemetry into an interactive, natural-language view of race strategy.",
            techStack: ["FastMCP", "HttpX"]
        },

        {
            name: "Smart Traffic",
            url: "https://github.com/praneethravuri/traffic-congestion-reduction-with-SARSA",
            description:
                "A reinforcement learning simulation that dynamically adjusts traffic light timing to reduce congestion.",
            tags: ["Reinforcement Learning", "Python"],
            problem:
                "Fixed-timer intersections waste capacity by treating all traffic patterns the same.",
            solution:
                "I modeled an intersection environment and trained an agent using SARSA. The agent observes queue lengths and learns when to switch lights based on current demand.",
            outcome:
                "The learned policy reduced average wait times compared to static schedules and served as my entry point into applied reinforcement learning.",
            techStack: ["NumPy", "Pygame", "Matplotlib"]
        },

        {
            name: "Notstuck",
            url: "https://github.com/praneethravuri/notstuck",
            description:
                "A hybrid-search RAG assistant for extracting precise answers from large technical documents.",
            tags: ["RAG", "Hybrid Search", "TypeScript"],
            problem:
                "Keyword search struggles with vague queries, while pure semantic search often misses exact technical details.",
            solution:
                "I built a pipeline that combines vector similarity with keyword filtering to locate relevant sections in large documents, then generates answers with source citations.",
            outcome:
                "Reduces the time spent navigating long PDFs and improves confidence in retrieved answers.",
            techStack: ["TypeScript", "React", "Next.js", "PostgreSQL", "Pinecone", "Crew AI"]
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
