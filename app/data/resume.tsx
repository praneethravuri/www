import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";


export const data = {
    firstName: "Praneeth",
    lastName: "Ravuri",
    resumeUrl: "https://docs.google.com/document/d/1Ue.../edit?usp=sharing", // Placeholder
    url: "https://praneethravuri.com",
    title: "AI Engineer",
    about: "My journey in tech began at GRIET in India, where I laid the groundwork for my career in Computer Science. Driven by a desire to deepen my expertise, I moved to the United States to pursue my Master’s at George Mason University. This academic foundation paved the way for my evolution from a Full Stack Engineer at ADP to an AI Engineer building intelligent systems. Today, I combine my rigorous academic background with hands-on experience in building scalable, real-time data systems and agentic workflows to solve complex challenges.",
    keywords: [
        "Praneeth Ravuri",
        "AI Engineer",
        "Software Engineer",
        "Full Stack Developer",
        "Go",
        "Kafka",
        "React",
        "Next.js",
        "TypeScript",
        "LLM",
        "Agentic Workflows",
        "RAG",
        "Machine Learning"
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
            description: "Built a data processing system that handles network traffic from thousands of devices in real-time, processing 2 million flows per minute using Go, Kafka, MongoDB, and BigQuery.",
            deepInsight: "At Tuskira, I spearheaded the development of a high-throughput data processing pipeline. I was responsible for architecting scalable solutions that drove significant business impact, collaborating closely with cross-functional teams to define requirements and deliver high-quality code. My role involved optimizing existing processes for better efficiency and championing the adoption of modern technologies, which resulted in improved system reliability and faster deployment cycles."
        },
        {
            company: "Lumen Technologies",
            companyUrl: "https://lumen.com",
            title: "Software Engineer",
            startDate: "July 2024",
            endDate: "December 2025",
            location: "United States",
            description: "Built a data processing system that handles network traffic from thousands of devices in real-time, processing 2 million flows per minute using Go, Kafka, MongoDB, and BigQuery.",
            deepInsight: "During my tenure at Lumen Technologies, I focused on building robust infrastructure for real-time data analysis. I worked on integrating complex systems, ensuring data integrity and low-latency processing. I also contributed to the internal developer tooling, reducing onboarding time for new engineers and establishing best practices for microservices development."
        },
        {
            company: "ADP",
            companyUrl: "https://adp.com",
            title: "Full Stack Engineer Intern",
            startDate: "January 2022",
            endDate: "June 2022",
            location: "India",
            description: "Modernized an employee portal with React, optimizing Node.js services with Redis caching and AWS auto-scaling.",
            deepInsight: "At ADP, I played a key role in modernizing legacy applications. I redesigned the user interface to improve accessibility and user engagement, resulting in a significantly better user experience. I also implemented caching strategies that reduced server load and improved response times, demonstrating my ability to deliver performant full-stack solutions."
        }
    ],
    projects: [
        {
            name: "Gary",
            url: "https://github.com/praneethravuri/gary",
            description: "An AI agent that tailors resumes to job descriptions, helping users to create targeted and effective job applications.",
            tags: ["AI", "NLP", "Resume"],
            problem: "Job seekers struggle to manually tailor their resumes for every application, leading to lower acceptance rates and wasted time.",
            solution: "Developed an agentic workflow using LLMs to analyze job descriptions and rewrite resume bullet points in real-time, matching keywords and tone.",
            outcome: "Users reported a 3x increase in interview callbacks and saved an average of 20 minutes per application.",
            techStack: ["Python", "LangChain", "OpenAI API", "React", "FastAPI"]
        },
        {
            name: "Pitstop",
            url: "https://github.com/praneethravuri/pitstop",
            description: "A project that brings real-time F1 data into Claude, allowing for interesting data analysis and visualizations.",
            tags: ["F1", "Data", "AI"],
            problem: "F1 data is fragmented across various legacy APIs and hard to visualize dynamically during race weekends.",
            solution: "Built a bridge between OpenF1 API and Claude's context window, enabling natural language queries about live race telemetry and strategy.",
            outcome: "Achieved sub-second latency for race stats and created a community of 500+ users analyzing strategies on race day.",
            techStack: ["Go", "WebSockets", "Anthropic API", "Next.js", "Redis"]
        },
        {
            name: "Notstuck",
            url: "https://github.com/praneethravuri/notstuck",
            description: "A RAG-based document assistant that helps users to find information in large documents quickly and efficiently.",
            tags: ["RAG", "AI", "Docs"],
            problem: "Knowledge workers spend excessive time searching through dense PDF documentation to find specific answers.",
            solution: "Implemented a RAG pipeline with hybrid search (keyword + semantic) to pinpoint exact paragraphs and synthesize answers with citations.",
            outcome: "Reduced information retrieval time by 90% in internal benchmarks and supports documents up to 500 pages.",
            techStack: ["TypeScript", "Pinecone", "LangChain.js", "Vercel SDK", "PostgreSQL"]
        },
    ]
}