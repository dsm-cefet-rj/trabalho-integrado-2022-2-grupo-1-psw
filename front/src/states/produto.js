import { atom } from "recoil";
const str = localStorage.getItem("listaProduto")
  ? localStorage.getItem("listaProduto")
  : "[]";
export const nomeNProduto = atom({
  key: "nomeNProduto",
  default: "",
});
export const codigoNProduto = atom({
  key: "codigoNProduto",
  default: "",
});
export const quantidadeNProduto = atom({
  key: "quantidadeNProduto",
  default: "",
});
export const listaProduto = atom({
  key: "listaProduto",
  default: JSON.parse(str),
});
export const modalNProduto = atom({
  key: "modalNProduto",
  default: false,
});
export const modalGProduto = atom({
  key: "modalGProduto",
  default: false,
});
