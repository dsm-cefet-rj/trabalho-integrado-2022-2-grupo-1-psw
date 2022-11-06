import React from "react";
import EquipesRow from '../components/TableEquipes.js';
import {Modal, Table} from "react-bootstrap"
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function Equipes () {

  const state = {
    contador: 1
  };

 function handleClickNovaEquipe ()  {
    this.setState({contador: 1}, this.soChamaQuandoAtualizar);
  }

  function soChamaQuandoAtualizar () {
    console.log(this.state.contador); // assim que clicar, o novo valor já será 1
  };



  return (
    <div>
  <div>
    <button type="button" class="btn">Filtrar</button>
</div>
      <Table>        
          <thead>
            <tr>
              <th>Ordem</th>
              <th>Nome</th>
              <th>Código da Equipe</th>
              <th></th>
            </tr>


          </thead>

            <tbody>
              <EquipesRow ordem={1} nome={"A"} codigoEquipe={2} /> 
              <EquipesRow ordem={2} nome={"B"} codigoEquipe= {2}/>
              <EquipesRow ordem={3} nome={"C"} codigoEquipe= {3}/>
            

            </tbody>

        </Table>
  <div class="btn-group mr-2" role="group" aria-label="Primeiro grupo">
    <button onClick={()=>this.handleClickNovaEquipe()} type="button" class="btn btn-primary">Adicionar Nova Equipe</button>
    <button onClick={()=>this.handleClickFiltro()} type="button" class="btn btn-primary">Filtrar</button>
  </div>
</div>



  )
};

export default Equipes;