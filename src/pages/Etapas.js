import EtapaRow from "../components/etapas/TableEtapas"
import React, { useState } from "react"
import {Button, Table} from "react-bootstrap"
function Etapas () {
const [etapas,setEtapas]= useState([])
  function AdicionarEtapa(){
    



  }
    return (

      <div className="container mt-4">
        <div className="d-flex flex-row justify-content-between">
          <h1>Etapas Produtivas</h1>
          <Button className="mt-2 mb-2">Adicionar</Button>
          </div>

        <Table>
          <thead>
            <tr>
              <th>Ordem</th>
              <th>Nome</th>
              <th>Duração</th>
              <th></th>

            </tr>


          </thead>

            <tbody>
              <EtapaRow ordem={1} nome={"B"} duracao={1} /> 
              <EtapaRow ordem={2} nome={"C"} duracao= {2}/>
            

            </tbody>

        </Table>



      </div>
    )
  };
  
  export default Etapas;