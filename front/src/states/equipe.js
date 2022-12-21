import { atom } from "recoil"

  export const nomeNEquipe = atom({
    key: 'nomeNEquipe',
    default: '',
  });  
  export const duracaoNEquipe = atom({
    key: 'duracaoNEquipe',
    default: '',
  });
  export const listaEquipe = atom({
    key: 'listaEquipe',
    default: [],
  });
  export const modalNEquipe = atom({
    key: 'modalNEquipe',
    default: false,
  });

  export const modalGEquipe= atom({
    key: 'modalGEquipe',
    default: false,
  });

  export const email = atom({
    key:'emailConvite',
    default:'',
  });