import EtapaRow from "../components/etapas/TableEtapas"
import React from "react"
import {Table} from "react-bootstrap"
function Etapas () {
    return (

      <div className="container mt-4">
        <h1>Etapas Produtivas</h1>
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