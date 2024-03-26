import uuid from "react-uuid";

export type Quest = {
    id: string;
    name: string;
    description: string;
    complete: boolean;
  };
  
  //Skapar de första questen som ska vara en array utan quest objekt
  export const initialQuests: Quest[] = [
    {
      id: uuid(),
      name: "The Castle",
      description: "Go to the castle",
      complete: false,
    },
    {
      id: uuid(),
      name: "All good comes from nature",
      description: "Collect 10 pink flowers",
      complete: true,
    },
    {
      id: uuid(),
      name: "Back you must go",
      description: "Go back to the castle",
      complete: false,
    },
  ];