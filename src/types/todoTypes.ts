import uuid from "react-uuid";
import { getDate } from "../functions/getDate";

type toDo = {
  id: string;
  name: string;
  date: object;
  description: string;
  finished: boolean;
};

export const initialToDoS: toDo[] = [
  {
    id: uuid(),
    name: "Påskafton",
    date: getDate,
    description: "Skapa inköpslista, planera lekar",
    finished: false,
  },
  {
    id: uuid(),
    name: "Lekar",
    date: getDate,
    description: "Ägg på sked, penna i flaskan, yatzy",
    finished: false,
  },
  {
    id: uuid(),
    name: "Mat",
    date: getDate,
    description: "Ägg, kött till grill, sallad, dricka, godis, potatisgratäng?",
    finished: false,
  }
];
