import { Icons } from "@/components/icons";
import { HomeIcon } from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Python } from "@/components/ui/svgs/python";
import { Golang } from "@/components/ui/svgs/golang";
import { Docker } from "@/components/ui/svgs/docker";
import { Kubernetes } from "@/components/ui/svgs/kubernetes";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { Anthropic } from "@/components/ui/svgs/anthropic";

export const DATA = {
  name: "Praneeth Ravuri",
  initials: "PR",
  url: "https://praneethravuri.com",
  location: "Chicago, USA",
  locationLink: "",
  description:
    "AI Engineer at Tuskira. Building agent memory, feedback, and MCP tooling for SOC investigation agents.",
  summary:
    "AI engineer building production agents and the harness engineering around them: memory, retrieval, feedback, MCP tooling, and high-throughput backend services.",
  linkPreviews: {},
  avatarUrl: "/avatar.webp",
  skills: [
    { name: "Python", icon: Python },
    { name: "Go", icon: Golang },
    { name: "TypeScript", icon: Typescript },
    { name: "React", icon: ReactLight },
    { name: "Docker", icon: Docker },
    { name: "Kubernetes", icon: Kubernetes },
    { name: "PostgreSQL", icon: Postgresql },
    { name: "Claude", icon: Anthropic },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
  ],
  contact: {
    email: "ravpraneeth@gmail.com",
    tel: "",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://www.github.com/praneethravuri",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/prav10",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/praneeth2510",
        icon: Icons.x,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Tuskira",
      href: "",
      badges: [],
      location: "United States",
      title: "AI Engineer",
      logoUrl: "/images/logos/tuskira_logo.webp",
      start: "Dec 2025",
      end: "Present",
      description:
        "Building memory, feedback, and tool systems for SOC investigation agents. Created a FalkorDB-backed memory service that records investigations, stores analyst feedback in a knowledge graph, and exposes retrieval through MCP. Also building MCP servers and case-aggregation workflows that group similar investigations before analysis, improving context quality while cutting tokens and cost.",
    },
    {
      company: "Lumen",
      href: "",
      badges: [],
      location: "United States",
      title: "Software Engineer",
      logoUrl: "/images/logos/lumen_logo.webp",
      start: "Oct 2024",
      end: "Nov 2025",
      description:
        "Built a Go microservice that decodes IPFIX network-flow data at millions-of-flows-per-minute scale. Used goroutines and channels for high-throughput decoding, Kafka to separate ingestion from processing, and a retry path for flows that could not be decoded cleanly. Stored decoded data in BigQuery for historical analysis and MongoDB for operational network-engineer workflows on GCP.",
    },
    {
      company: "ADP",
      href: "",
      badges: [],
      location: "India",
      title: "Full Stack Engineer Intern",
      logoUrl: "/images/logos/adp_logo.webp",
      start: "Jan 2022",
      end: "Jun 2022",
      description:
        "Modernized a legacy internal employee-page experience during an internship. Rebuilt the UI with React, cleaned up older JavaScript patterns, and worked with Node.js and Redis while making the page easier to use and maintain.",
    },
  ],
  education: [
    {
      school: "George Mason University",
      href: "",
      degree: "Master's in Computer Science",
      logoUrl: "/images/logos/gmu.webp",
      start: "",
      end: "",
    },
    {
      school: "GRIET",
      href: "",
      degree: "Bachelor's in Computer Science",
      logoUrl: "/images/logos/griet.webp",
      start: "",
      end: "",
    },
  ] as Array<{
    school: string;
    href: string;
    degree: string;
    logoUrl: string;
    start: string;
    end: string;
  }>,
  projects: [
    {
      title: "Tether",
      href: "https://github.com/praneethravuri/tether",
      dates: "",
      active: true,
      description:
        "Every coding agent runs in its own silo — Claude Code can't see a Codex session, and Codex can't message an Aider session, so answers get copied by hand between terminals. Tether replaces that with a local message bus: a background daemon backed by SQLite, and a CLI any agent, in any harness, can call from the shell to register a name, send mail, and block until a reply arrives.",
      technologies: ["Go", "SQLite", "Unix Sockets"],
      links: [
        {
          type: "Source",
          href: "https://github.com/praneethravuri/tether",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Gary",
      href: "https://github.com/praneethravuri/gary",
      dates: "",
      active: true,
      description:
        "Built for a real job-search workflow, then shaped into a reusable multi-agent resume tool. Gary reads a job description, extracts what matters, compares it with a resume, and drafts tailored sections without stuffing keywords or losing the person's voice. Outputs PDF and Word docs through a CrewAI workflow.",
      technologies: ["Crew AI", "MongoDB", "GCP"],
      links: [
        {
          type: "Source",
          href: "https://github.com/praneethravuri/gary",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Pitstop",
      href: "https://github.com/praneethravuri/pitstop",
      dates: "",
      active: true,
      description:
        "An MCP server that lets an LLM ask questions over F1 telemetry. Pitstop turns race data into clean tool responses for lap times, tire behavior, pit windows, and pace, making strategy questions answerable in plain English. Built with FastMCP and HttpX.",
      technologies: ["FastMCP", "HttpX"],
      links: [
        {
          type: "Source",
          href: "https://github.com/praneethravuri/pitstop",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Smart Traffic",
      href: "https://github.com/praneethravuri/traffic-congestion-reduction-with-SARSA",
      dates: "",
      active: true,
      description:
        "An adaptive traffic-light simulation inspired by vehicle-actuated control, but with a learning agent. The SARSA agent observes queue lengths and learns when to switch signals, improving wait times over fixed schedules in the simulation. Built with NumPy, Pygame, and Matplotlib.",
      technologies: ["NumPy", "Pygame", "Matplotlib"],
      links: [
        {
          type: "Source",
          href: "https://github.com/praneethravuri/traffic-congestion-reduction-with-SARSA",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Notstuck",
      href: "https://github.com/praneethravuri/notstuck",
      dates: "",
      active: true,
      description:
        "A RAG project for messy technical docs. It combines vector similarity with keyword filtering so answers can find both meaning and exact terms, then uses CrewAI to produce cited responses. Built to learn what makes retrieval feel trustworthy: metadata, ranking, and visible sources.",
      technologies: ["React", "Next.js", "PostgreSQL", "Pinecone", "Crew AI"],
      links: [
        {
          type: "Source",
          href: "https://github.com/praneethravuri/notstuck",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
  ],
  hackathons: [] as Array<{
    title: string;
    dates: string;
    location: string;
    description: string;
    image: string;
    mlh?: string;
    win?: string;
    icon?: string;
    links: Array<{ title: string; icon: React.ReactNode; href: string }>;
  }>,
} as const;
