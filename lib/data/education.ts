export interface Education {
  id: string;
  degree: string;
  field: string;
  institution: string;
  location: string;
  startYear: number;
  endYear: number;
  gpa?: string;
  thesis?: string;
  highlights: string[];
}

export const education: Education[] = [
  {
    id: "1",
    degree: "Ph.D.",
    field: "Computer Science (Machine Learning)",
    institution: "Stanford University",
    location: "Stanford, CA",
    startYear: 2014,
    endYear: 2018,
    gpa: "4.0/4.0",
    thesis: "Scalable Reinforcement Learning for Sequential Decision Making in High-Dimensional Spaces",
    highlights: [
      "NSF Graduate Research Fellowship recipient",
      "Published 6 papers at top-tier venues (NeurIPS, ICML, ICLR)",
      "Teaching Assistant for CS229 Machine Learning (3 semesters)",
      "Stanford AI Lab (SAIL) member",
    ],
  },
  {
    id: "2",
    degree: "B.S.",
    field: "Computer Science & Mathematics",
    institution: "MIT",
    location: "Cambridge, MA",
    startYear: 2010,
    endYear: 2014,
    gpa: "4.9/5.0",
    highlights: [
      "Summa Cum Laude, Phi Beta Kappa",
      "Undergraduate thesis on neural network optimization",
      "MIT CSAIL Research Intern (2 years)",
      "ACM ICPC Regional Finalist",
    ],
  },
];
