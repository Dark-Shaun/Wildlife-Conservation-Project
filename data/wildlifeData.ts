export interface WildlifeLocation {
    id: number;
    name: string;
    coordinates: [number, number];
    animal: string;
    description: string;
    imageUrl: string;
    population: string;
    status: 'Endangered' | 'Threatened' | 'Stable';
    animalEmoji: string;
    funFact?: string;
  }
  
  export const wildlifeData = [
    {
      id: 1,
      name: "Yellowstone",
      coordinates: [-110.5885, 44.4280],
      animal: "Gray Wolf",
      description: "Reintroduced in 1995, wolves have made a remarkable comeback in Yellowstone, restoring natural balance.",
      imageUrl: "https://images.unsplash.com/photo-1589656966895-2f33e7653819",
      population: "~500",
      status: "Stable",
      animalEmoji: "🐺",
      funFact: "A wolf pack can bring down an elk in 15-20 minutes!"
    },
    {
      id: 2,
      name: "Florida Everglades", 
      coordinates: [-80.9283, 25.2866],
      animal: "Florida Panther",
      description: "These majestic cats face critical challenges in their shrinking Everglades habitat.",
      imageUrl: "https://images.unsplash.com/photo-1590767187868-b8e9ece0974b",
      population: "~200",
      status: "Endangered",
      animalEmoji: "🐆",
      funFact: "Can leap up to 15 feet high and run at speeds up to 35mph!"
    },
    {
      id: 3,
      name: "Olympic National Park",
      coordinates: [-123.5000, 47.8021],
      animal: "Roosevelt Elk",
      description: "Majestic herds roam freely through ancient forests and alpine meadows.",
      imageUrl: "https://images.unsplash.com/photo-1484406566174-9da000fda645",
      population: "~3000",
      status: "Stable",
      animalEmoji: "🦌",
      funFact: "Males can weigh up to 1,100 pounds!"
    },
    {
      id: 4,
      name: "Death Valley",
      coordinates: [-116.9325, 36.5323],
      animal: "Desert Tortoise", 
      description: "Ancient survivors adapting to increasingly harsh desert conditions.",
      imageUrl: "https://images.unsplash.com/photo-1437622368342-7a3d73a34c8f",
      population: "~100,000",
      status: "Threatened",
      animalEmoji: "🐢",
      funFact: "Can live up to 80 years in the wild!"
    },
    {
      id: 5,
      name: "Great Smoky Mountains",
      coordinates: [-83.5085, 35.6532],
      animal: "Black Bear",
      description: "Symbol of wilderness thriving in America's most visited national park.",
      imageUrl: "https://images.unsplash.com/photo-1530595467537-0b5996c41f2d",
      population: "~1,500",
      status: "Stable",
      animalEmoji: "🐻",
      funFact: "Can smell food from over 5 miles away!"
    },
    {
      id: 6,
      name: "Denali National Park",
      coordinates: [-151.0063, 63.1148],
      animal: "Caribou",
      description: "Massive herds migrate across the tundra in one of nature's great spectacles.",
      imageUrl: "https://images.unsplash.com/photo-1557976606-d068b9719915",
      population: "~2,200",
      status: "Threatened",
      animalEmoji: "🦌",
      funFact: "Can run at speeds of up to 50mph!"
    },  
    {
      id: 8,
      name: "Channel Islands",
      coordinates: [-119.7371, 33.9961],
      animal: "Island Fox",
      description: "Found nowhere else on Earth, these tiny foxes are a conservation success story.",
      imageUrl: "https://images.unsplash.com/photo-1516934024742-b461fba47600",
      population: "~4,000",
      status: "Endangered",
      animalEmoji: "🦊",
      funFact: "Smallest fox species in North America!"
    }
  ];