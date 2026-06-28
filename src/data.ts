export interface FocusTrack {
  id: string;
  name: string;
  description: string;
  tagline: string;
  category: "Frontend" | "Backend" | "Mobile" | "Design";
  skills: string[];
}

export interface ValueProp {
  title: string;
  description: string;
  iconName: "Code" | "Users" | "Globe" | "Award";
}

export interface Pillar {
  title: string;
  subtitle: string;
  description: string;
}

export const FOCUS_TRACKS: FocusTrack[] = [
  {
    id: "track-frontend",
    name: "Modern Frontend Engineering",
    description: "Building responsive, highly optimized web interfaces using React, TypeScript, and modern styling solutions with clean architecture.",
    tagline: "Crafting beautiful and performant user experiences.",
    category: "Frontend",
    skills: ["React", "TypeScript", "Tailwind CSS", "Vite", "Responsive Design"]
  },
  {
    id: "track-backend",
    name: "Robust Backend Systems",
    description: "Designing structured database schemas, secure APIs, and server-side systems equipped to handle scale and real-world operational workflows.",
    category: "Backend",
    tagline: "Engineering efficient, secure API foundations.",
    skills: ["Node.js", "Express", "RESTful APIs", "SQL / NoSQL", "Security Best Practices"]
  },
  {
    id: "track-design",
    name: "Product Design & Strategy",
    description: "Mapping out functional interfaces, user flows, and modern design systems built to elevate product usability.",
    category: "Design",
    tagline: "Bridging the gap between code and high-fidelity user journeys.",
    skills: ["Figma", "User Research", "Wireframing", "Component Systems", "Prototyping"]
  }
];

export const VALUE_PROPS: ValueProp[] = [
  {
    title: "Project-First Framework",
    description: "We focus on building concrete, robust digital products from scratch to practice production-grade software workflows.",
    iconName: "Code"
  },
  {
    title: "Peer-Led Collaboration",
    description: "Learn and collaborate in cohesive cohorts to discuss code standards, architecture plans, and system requirements together.",
    iconName: "Users"
  },
  {
    title: "Context-Aware Engineering",
    description: "We study, design, and optimize web applications keeping local accessibility and system performance in focus.",
    iconName: "Globe"
  },
  {
    title: "High-Trust Foundations",
    description: "We are committed to establishing industry-standard guidelines, modular structures, and clear documentation right from the start.",
    iconName: "Award"
  }
];

export const PILLARS: Pillar[] = [
  {
    title: "Rigorous Standards",
    subtitle: "Clean Code",
    description: "Our learning path focuses heavily on version control pipelines, test-driven methodologies, and modular development habits."
  },
  {
    title: "Mentorship-Driven",
    subtitle: "Peer Led",
    description: "Fostering professional collaboration between emerging developers and tech leads to build highly reliable codebases."
  },
  {
    title: "Open Source Mindset",
    subtitle: "Public & Auditable",
    description: "We believe in transparency. All community templates, boilerplates, and tools we engineer are designed to be publicly accessible."
  }
];

export const TARGETS = [
  { value: "100%", label: "Open Source Core" },
  { value: "Peer", label: "Code Review Culture" },
  { value: "Local", label: "African Tech Innovation" }
];
