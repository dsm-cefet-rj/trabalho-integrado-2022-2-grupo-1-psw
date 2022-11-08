import React from "react";
import Table from '../components/equipes/TableEquipes.js';
import NovaEquipe from "../components/equipes/modalAddEquipe.js";
import {Button} from "react-bootstrap"
import {useState} from 'react'
import {
  ThemeProvider,
  StyledEngineProvider,
  CssBaseline,
} from '@mui/material';


function Equipes () {
  const [AddEquipe, setmodalAddEquipe] = useState(false)
  const [equipes, setEquipe] = useState([])
  function modalAddEquipe() {
    setmodalAddEquipe(true)
  }
  function modalAddEquipeClose(){
    setmodalAddEquipe(false)
  }
  function novoHandler2(equipe){
    setEquipe([...equipes, equipe])
  }

  function removerEquipe(equipe) {
    let c = window.confirm("Deseja apagar esta equipe?")
    if(!c){
      return 
   }

    let e = [...equipes]
    e.splice(equipe-1, equipe)
    setEquipe(e)
  }


  return (
    <div className='container mt-3'>
    <NovaEquipe show={AddEquipe} cHandler={modalAddEquipeClose} novoHandler2={novoHandler2}/>
    <div className='d-flex flex-row justify-content-between w-100 mb-3'>
        <h1>Equipe</h1>
        <Button className="m-2" onClick={modalAddEquipe}>Nova Equipe</Button>
      </div>
    <StyledEngineProvider injectFirst>
      <Table  rows={equipes} removeHandler={removerEquipe} />
    </StyledEngineProvider>
  </div>

  )
};

export default Equipes;