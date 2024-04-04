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
  },
  {
    id: uuid(),
    name: "Träning",
    date: getDate(),
    description: "Jogging, stretching, push-ups",
    finished: false,
  },

  {
    id: uuid(),
    name: "Studier",
    date: getDate(),
    description: "Läsa, skriva uppsats, göra övningar",
    finished: false,
  },

  {
    id: uuid(),
    name: "Hemarbete",
    date: getDate(),
    description: "Diska, dammsuga, tvätta kläder",
    finished: false,
  },

  {
    id: uuid(),
    name: "Möte",
    date: getDate(),
    description: "Planera projektet, diskutera budgeten",
    finished: false,
  },

  {
    id: uuid(),
    name: "Resa",
    date: getDate(),
    description: "Boka flyg, hitta hotell, packa väskan",
    finished: false,
  },

  {
    id: uuid(),
    name: "Renovering",
    date: getDate(),
    description: "Måla väggarna, byta golv, fixa elen",
    finished: false,
  },

  {
    id: uuid(),
    name: "Läkarkontroll",
    date: getDate(),
    description: "Gå på läkarundersökning, ta blodprov",
    finished: false,
  },

  {
    id: uuid(),
    name: "Födelsedagsfest",
    date: getDate(),
    description: "Köpa present, baka tårta, dekorera",
    finished: false,
  },

  {
    id: uuid(),
    name: "Trädgårdsarbete",
    date: getDate(),
    description: "Plantera blommor, klippa gräset, rensa ogräs",
    finished: false,
  },

  {
    id: uuid(),
    name: "Filmkväll",
    date: getDate(),
    description: "Välja film, poppa popcorn, tända ljus",
    finished: false,
  },
];
