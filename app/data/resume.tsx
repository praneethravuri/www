import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";


export const data = {
    firstName: "Praneeth",
    lastName: "Ravuri",
    url: "https://praneethravuri.com",
    contact: {
        email: "ravpraneeth@gmail.com",
        social: {
            GitHub: {
                name: "GitHub",
                url: "https://www.github.com/praneethravuri",
                icon: FaGithub
            },
            LinkedIn: {
                name: "LinkedIn",
                url: "www.linkedin.com/in/prav10",
                icon: FaLinkedin
            },
            X: {
                name: "X",
                url: "https://x.com/praneeth2510",
                icon: FaXTwitter
            }
        }
    },
    about: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim doloremque labore quos culpa esse ullam dolores similique veritatis possimus cumque tempore cupiditate itaque ut, repellendus quia mollitia facere architecto aliquam.",
    skills: [
        "JavaScript",
        "TypeScript",
        "React",
        "Node.js",
        "Python",
        "Go",
        "Agentic AI",
        "Generative AI"],
    work: [
        {
            company: "Tuskira.ai",
            companyUrl: "https://tuskira.ai",
            title: "AI Engineer",
            startDate: "December 2025",
            endDate: "Present",
            location: "United States",
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit, sunt."
        },
        {
            company: "Lumen Technologies",
            companyUrl: "https://lumen.com",
            title: "Software Engineer",
            startDate: "July 2024",
            endDate: "December 2025",
            location: "United States",
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit, sunt."
        },
        {
            company: "ADP",
            companyUrl: "https://adp.com",
            title: "Software Engineer Intern",
            startDate: "January 2022",
            endDate: "June 2022",
            location: "India",
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit, sunt."
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
            name: "F1 MCP Server",
            url: "https://github.com/praneethravuri/pitstop",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, repellat.",
            tags: ["Python", "MCP", "F1"]
        },
        {
            name: "RAG Document Assistant",
            url: "https://github.com/praneethravuri/notstuck",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, repellat.",
            tags: ["Python", "RAG", "AI"]
        },
    ]
}