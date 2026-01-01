


export const data = {
    firstName: "Praneeth",
    lastName: "Ravuri",
    resumeUrl: "https://docs.google.com/document/d/1Ue.../edit?usp=sharing", // Placeholder
    url: "https://praneethravuri.com",
    title: "AI Engineer",
    about: "I started at GRIET in India, but I moved to George Mason University because I wanted to get my hands dirty. I didn't just want to study code; I wanted to collaborate on systems that actually moved. The turning point was a Machine Learning course where I built a traffic congestion model using SARSA. Watching that simulation learn to clear an intersection was the moment I realized I didn't just want to build UIs—I wanted to build intelligence. Outside of code, my brain works the same way. Whether I'm reverse-engineering a recipe to improve the texture or analyzing F1 pit strategies, I’m obsessed with optimization. My goal now is simple: automate boredom. I build agents so humans can do the interesting stuff.",
    keywords: [
        "Praneeth Ravuri",
        "AI Engineer",
        "Agentic Workflows",
        "MCP Servers",
        "RAG",
        "Go",
        "Kafka",
        "Python",
        "LLM Orchestration",
        "Vector Databases",
        "Reinforcement Learning"
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
            description: "Architecting autonomous cybersecurity agents that hunt threats, analyze alerts, and patch vulnerabilities faster than human analysts. Built on a stack of Claude, AWS, Kubernetes, and Postgres.",
            deepInsight: "The biggest challenge in agentic AI isn't the model; it's the context. I built a memory system that allows agents to reference past investigations without getting confused by old errors, using smaller models to summarize history and save context space. I also heavily optimized our MCP servers. Instead of dumping raw data into the LLM, I implemented server-side filtering to ensure we only spend tokens on exactly what the agent requests. The result is a system that can pivot across domains—from finance to healthcare—without hallucinating or burning through the budget."
        },
        {
            company: "Lumen Technologies",
            companyUrl: "https://lumen.com",
            title: "Software Engineer",
            startDate: "July 2024",
            endDate: "December 2025",
            location: "United States",
            description: "Engineered the backend for a real-time network traffic system processing 2 million flows per minute using Go, Kafka, and MongoDB.",
            deepInsight: "At this volume, standard code breaks. I had to ensure zero data loss while handling massive throughput. I utilized Go's concurrency primitives—specifically goroutines paired with buffered channels—to manage the data ingestion pressure. We used Kafka partitioning to scale horizontally, ensuring that even during peak traffic spikes, the database writes remained stable and the system didn't choke."
        },
        {
            company: "ADP",
            companyUrl: "https://adp.com",
            title: "Full Stack Engineer Intern",
            startDate: "January 2022",
            endDate: "June 2022",
            location: "India",
            description: "Modernized a legacy employee portal, redesigning the UI with React and optimizing the backend Node.js services.",
            deepInsight: "This was my crash course in performance at scale. I implemented Redis caching strategies that took a heavy load off our primary databases, significantly cutting down response times. It taught me that a pretty UI is useless if the backend can't deliver data instantly."
        }
    ],
    projects: [
        {
            name: "Gary",
            url: "https://github.com/praneethravuri/gary",
            description: "An autonomous agent that handles the entire resume tailoring process, generating ready-to-use PDF or Word documents based on job descriptions.",
            tags: ["Agentic AI", "Context Engineering", "Python"],
            problem: "I got tired of the repetitive loop of tweaking resumes manually. Existing tools were just wrappers around basic prompts that didn't actually understand the job requirements.",
            solution: "Gary uses a multi-step agentic workflow. It searches for relevant keywords, analyzes the tone of the JD, and rewrites bullet points using complex context engineering to ensure the output beats ATS filters.",
            outcome: "It’s not just a rewriter; it’s an end-to-end recruiter engagement tool that saves hours of manual editing per application.",
            techStack: ["Python", "LangChain", "OpenAI API", "React", "FastAPI"]
        },
        {
            name: "Pitstop",
            url: "https://github.com/praneethravuri/pitstop",
            description: "A real-time data bridge connecting live Formula 1 telemetry to Claude for natural language race analysis.",
            tags: ["F1", "WebSockets", "LLM"],
            problem: "F1 data is notoriously fragmented. I wanted a way to 'talk' to the race strategy as it was happening, rather than digging through multiple dashboards.",
            solution: "I built an MCP server that pipes live OpenF1 data directly into Claude’s context window. The interface is simple, but the backend handles rapid-fire WebSocket streams to keep the LLM updated on lap times and tire degradation.",
            outcome: "Turns complex, high-speed telemetry into a conversational interface for race fans.",
            techStack: ["Go", "WebSockets", "Anthropic API", "Next.js", "Redis"]
        },
        {
            name: "Smart Traffic",
            url: "https://github.com/praneethravuri/traffic-congestion-reduction-with-SARSA",
            description: "A reinforcement learning simulation that optimizes traffic light timings to reduce congestion at intersections.",
            tags: ["Reinforcement Learning", "SARSA", "Python"],
            problem: "Fixed-timer traffic lights are inefficient. They force cars to wait even when the other road is empty, causing unnecessary congestion.",
            solution: "I built a simulation environment and trained an agent using the SARSA algorithm. The agent observes the queue lengths and learns the optimal policy for switching lights dynamically.",
            outcome: "This was my 'hello world' to AI. It successfully learned to prioritize high-density lanes, significantly reducing average wait times compared to static timers.",
            techStack: ["Python", "Reinforcement Learning", "Pygame", "NumPy"]
        },
        {
            name: "Notstuck",
            url: "https://github.com/praneethravuri/notstuck",
            description: "A hybrid-search RAG assistant designed to pull precise answers from massive technical documentation.",
            tags: ["RAG", "Vector Search", "TypeScript"],
            problem: "Standard keyword search fails when you don't know the exact terminology, and pure semantic search can miss specific technical details.",
            solution: "I implemented a hybrid pipeline that combines semantic understanding with keyword precision. It pinpoints exact paragraphs in 500+ page documents and synthesizes an answer with citations.",
            outcome: "Drastically reduces the time spent hunting through PDFs for technical specs.",
            techStack: ["TypeScript", "Pinecone", "LangChain.js", "Vercel SDK", "PostgreSQL"]
        },
    ],
    education: [
        {
            institution: "George Mason University",
            institutionUrl: "https://www2.gmu.edu/",
            degree: "Master's in Computer Science",
        },
        {
            institution: "GRIET",
            institutionUrl: "https://www.griet.ac.in/",
            degree: "Bachelor's in Computer Science",
        }
    ]
}