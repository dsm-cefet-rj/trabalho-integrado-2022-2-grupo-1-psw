import { atom } from "recoil"
const srt = localStorage.getItem('listaEtapa') ? localStorage.getItem('listaEtapa') : '[]'
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
    default: JSON.parse(srt),
  });
  export const modalNEtapa = atom({
    key: 'modalNEtapa',
    default: false,
  });

  export const modalGEtapas= atom({
    key: 'modalGEtapas',
    default: false,
  });