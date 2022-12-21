import { atom } from "recoil"

  export const nomeNEtapa = atom({
    key: 'nomeNEtapa',
    default: '',
  });  
  export const duracaoNEtapa = atom({
    key: 'duracaoNEtapa',
    default: '',
  });
  export const listaEtapa = atom({
    key: 'listaEtapa',
    default: [{ordem: 1, nome: "mta fe"}, {ordem: 2, nome: "uaaau"}],
  });
  export const modalNEtapa = atom({
    key: 'modalNEtapa',
    default: false,
  });