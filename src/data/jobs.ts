// Empleos, del más reciente al más antiguo.
// Si no tiene "end", se considera el empleo actual.
export interface Job {
  role: string;
  company: string;
  start: string;
  end?: string;
  description: string;
  tech?: string[];
}

export const jobs: Job[] = [
  {
    role: "AI Specialist",
    company: "Overstand",
    start: "2025",
    description:
      "Development of machine learning solutions using Python and libraries such as scikit-learn, pandas and NumPy. Data preparation and analysis, building predictive models and validating their performance.",
    tech: ["Python", "Pandas", "NumPy", "Scikit-learn", "Machine Learning", "SQL", "JavaScript"],
  },
  {
    role: "Developer",
    company: "Fungimail LTD",
    start: "2024",
    end: "2025",
    description:
      "Web application development, maintenance and vulnerability analysis on various Linux and Windows servers.",
    tech: ["Linux", "SQL", "JavaScript", "HostedScan"],
  },
];
