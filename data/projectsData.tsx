// data/projectsData.ts

export interface Project {
  id: number;
  title: string;
  description: string;
  image_url: string[]; // Ton tableau d'images
  date: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Distribution de paniers ramadan",
    description: "Une action solidaire pour aider les familles de Kénitra pendant le mois sacré.",
    image_url: ["/projets/ramadan1.jpg", "/projets/ramadan2.jpg"],
    date: "2024-03-15"
  },
  {
    id: 2,
    title: "Rentrée scolaire 2024",
    description: "Distribution de cartables et fournitures pour les orphelins.",
    image_url: ["/projets/ecole1.jpg"],
    date: "2024-09-01"
  }
];