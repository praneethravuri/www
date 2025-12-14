import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";


export const data = {
    firstName: "Praneeth",
    lastName: "Ravuri",
    resumeUrl: "https://docs.google.com/document/d/1Ue.../edit?usp=sharing", // Placeholder
    url: "https://praneethravuri.com",
    title: "AI Engineer",
    about: "AI Engineer and Full Stack Developer with experience in building scalable real-time data systems and intelligent agentic workflows. Professional background includes roles at Tuskira and Lumen Technologies, focusing on Go, Kafka, and Cloud Infrastructure. Passionate about solving complex problems with LLMs and modern web technologies.",
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
            description: "Built a data processing system that handles network traffic from thousands of devices in real-time, processing 2 million flows per minute using Go, Kafka, MongoDB, and BigQuery."
        },
        {
            company: "Lumen Technologies",
            companyUrl: "https://lumen.com",
            title: "Software Engineer",
            startDate: "July 2024",
            endDate: "December 2025",
            location: "United States",
            description: "Built a data processing system that handles network traffic from thousands of devices in real-time, processing 2 million flows per minute using Go, Kafka, MongoDB, and BigQuery."
        },
        {
            company: "ADP",
            companyUrl: "https://adp.com",
            title: "Full Stack Engineer Intern",
            startDate: "January 2022",
            endDate: "June 2022",
            location: "India",
            description: "Modernized an employee portal with React, optimizing Node.js services with Redis caching and AWS auto-scaling."
        }
    ],
    education: [
        {
            institution: "George Mason University",
            institutionUrl: "https://gmu.edu",
            degree: "Master of Science in Computer Science",
            startDate: "August 2022",
            endDate: "May 2024",
            location: "United States",
        },
        {
            institution: "GRIET",
            institutionUrl: "https://griet.ac.in",
            degree: "Bachelor of Technology in Computer Science",
            startDate: "August 2018",
            endDate: "May 2022",
            location: "India",
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