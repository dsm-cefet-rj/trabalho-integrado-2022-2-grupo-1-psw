import { atom } from "recoil"
import { selector } from "recoil";

  export const nomeNProduto = atom({
    key: 'nomeNProduto',
    default: '',
  });  
  export const codigoNProduto = atom({
    key: 'codigoNProduto',
    default: '',
  });
  export const quantidadeNProduto = atom({
    key: 'quantidadeNProduto',
    default: '',
  });
  export const listaProduto = atom({
    key: 'listaProduto',
    default: '',
  });
  export const modalNProduto = atom({
    key: 'modalNProduto',
    default: false,
  });