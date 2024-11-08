export interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Tiger Conservation",
    description: "Protecting Bengal Tigers in their natural habitat",
    imageUrl: "https://images.unsplash.com/photo-1477764250597-dffe9f601ae8",
  },
  {
    id: 2,
    title: "Rainforest Initiative", 
    description: "Preserving Amazon rainforest biodiversity",
    imageUrl: "https://images.unsplash.com/photo-1511497584788-876760111969",
  },
  {
    id: 3,
    title: "Ocean Cleanup",
    description: "Protecting coral reefs and marine ecosystems",
    imageUrl: "https://images.unsplash.com/photo-1583212292454-1fe6229603b7",
  },
  {
    id: 4,
    title: "Elephant Protection",
    description: "Supporting elephant conservation efforts", 
    imageUrl: "https://images.unsplash.com/photo-1581852017103-68ac65514cf7",
  },
  {
    id: 5,
    title: "Polar Conservation",
    description: "Preserving Arctic wildlife habitats",
    imageUrl: "https://images.unsplash.com/photo-1589656966895-2f33e7653819",
  },
];