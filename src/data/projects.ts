// Proyectos desarrollados en la empresa. El código es privado,
// así que solo se describen (sin enlaces a repositorios).
export interface Project {
  name: string;
  year?: string;
  description: string;
  tech: string[];
}

export const projects: Project[] = [
  {
    name: "AI Expert Assignment",
    description:
      "Automation system for assigning experts using artificial intelligence. Integrates Python, APIs and AI models such as Vertex AI and Mistral to optimise selection processes, information analysis and the matching of specialised profiles.",
    tech: ["Python", "APIs", "Vertex AI", "Mistral"],
  },
  {
    name: "Industrial Project Management",
    description:
      "Web application for managing and tracking industrial projects, with modules for site control, planning, costs, daily reports and productivity analysis. Automates processes through data extraction from PDF documents, database management and report generation.",
    tech: ["Python", "Django", "MySQL", "JavaScript", "Tailwind CSS"],
  },
  {
    name: "English E-learning Platform",
    description:
      "E-learning platform specialised in teaching English, with user management, interactive courses, exercises and assessments, and personalised tracking of academic progress. Modular, scalable architecture adaptable to different educational levels.",
    tech: ["Python", "Django", "PostgreSQL", "Tailwind CSS"],
  },
];
