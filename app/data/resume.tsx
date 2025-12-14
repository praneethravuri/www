import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";


export const data = {
    firstName: "Praneeth",
    lastName: "Ravuri",
    url: "https://praneethravuri.com",
    title: "AI Engineer",
    contact: {
        email: "ravpraneeth@gmail.com",
        social: {
            GitHub: {
                name: "GitHub",
                url: "https://www.github.com/praneethravuri",
            },
            LinkedIn: {
                name: "LinkedIn",
                url: "www.linkedin.com/in/prav10",
            },
            X: {
                name: "X",
                url: "https://x.com/praneeth2510",
            }
        }
    },
    about: "Full-stack engineer with a passion for building scalable systems and experimenting with AI agents. My expertise lies in creating fault-tolerant microservices and optimizing front-end performance. I am always looking for new challenges and opportunities to learn and grow.",
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
            degree: "Bachelor of Science in Computer Science",
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
            tags: ["AI", "NLP", "Resume"]
        },
        {
            name: "Pitstop",
            url: "https://github.com/praneethravuri/pitstop",
            description: "A project that brings real-time F1 data into Claude, allowing for interesting data analysis and visualizations.",
            tags: ["F1", "Data", "AI"]
        },
        {
            name: "Notstuck",
            url: "https://github.com/praneethravuri/notstuck",
            description: "A RAG-based document assistant that helps users to find information in large documents quickly and efficiently.",
            tags: ["RAG", "AI", "Docs"]
        },
    ]
}