import { atom } from "recoil"

  export const cadeia = atom({
    key: 'cadeiaProdutiva',
    default: [
      [{ordem:1, nome:"Design"}],
      [{ordem:2, nome:"Financeiro"}],
      [{ordem:3, nome:"Compras"}, {ordem:10, nome:"Cancelamento"}],
      [{ordem:4, nome:"Facção"}],
      [{ordem:5, nome:"Costura"}],
      [{ordem:6, nome:"Auditoria"}],
      [{ordem:7, nome:"Babado"}, {ordem:10, nome:"Cancelamento"}],
      [{ordem:8, nome:"Transporte"}],
      [{ordem:9, nome:"Finalizado"}]
    ]
  });

  export const stepsDisponiveis = atom({
    key: 'stepsDisponiveis',
    default: [
      {ordem:1, nome:"Design"},
      {ordem:2, nome:"Financeiro"},
      {ordem:3, nome:"Compras"},
      {ordem:4, nome:"Facção"},
      {ordem:5, nome:"Costura"},
      {ordem:6, nome:"Auditoria"},
      {ordem:7, nome:"Babado"},
      {ordem:8, nome:"Transporte"},
      {ordem:9, nome:"Finalizado"},
      {ordem:10, nome:"Cancelamento"}
    ]
  })