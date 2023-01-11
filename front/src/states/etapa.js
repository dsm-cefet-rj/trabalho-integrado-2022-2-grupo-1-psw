import { atom } from "recoil";

export const nomeNEtapa = atom({
  key: "nomeNEtapa",
  default: "",
});
export const duracaoNEtapa = atom({
  key: "duracaoNEtapa",
  default: "",
});
export const listaEtapa = atom({
  key: "listaEtapa",
  default: [],
});
export const modalNEtapa = atom({
  key: "modalNEtapa",
  default: false,
});

export const modalGEtapas = atom({
  key: "modalGEtapas",
  default: false,
});
