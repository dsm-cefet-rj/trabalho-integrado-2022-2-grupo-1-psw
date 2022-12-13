import { atom } from "recoil"

  export const cadeiaAtom = atom({
    key: 'cadeiaProdutiva',
    default: []
  });

  export const stepsAtom = atom({
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

  
  export const nodesAtom = atom({
    key:'flow-nodes',
    default:[{
      id: "-1",
      sourcePosition:"right",
      type:"input",
      data: {
        label: "Inicio"
      },
      position: { x: 100, y:200 },
    }]
  })
  
  export const edgesAtom = atom({
    key:'flow-edges',
    default:[],
  })