import uuid from "react-uuid";
import { getDate } from "../functions/getDate";





export type ToDo = {
  id: string;
  name: string;
  date: string;
  description: string;
  finished: boolean;
};


export const initialToDoS: ToDo[] = [
  {
    id: uuid(),
    name: "Handla",
    date: getDate(),
    description: "Bröd, smör, Ost, Skinka",
    finished: true,
  },
  {
    id: uuid(),
    name: "Städa",
    date: getDate(),
    description: "Dammsuga, damma",
    finished: false,
  },
  {
    id: uuid(),
    name: "Mat",
    date: getDate(),
    description: "Ägg, kött till grill, sallad, dricka, godis, potatisgratäng?",
    finished: false,
  }
];
