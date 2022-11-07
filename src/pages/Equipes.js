import React from "react";
import EquipesRow from '../components/equipes/TableEquipes.js';
import NovaEquipe from "../components/equipes/modalAddEquipe.js";
import { Table, Button} from "react-bootstrap"
import {useState} from 'react'
import {
  ThemeProvider,
  StyledEngineProvider,
  CssBaseline,
} from '@mui/material';


function Equipes () {
  const [AddEquipe, setAddEquipe] = useState(false)
  const [equipes, setEquipe] = useState([])
  function modalAddEquipe() {
    setAddEquipe(true)
  }
  function modalAddEquipeClose(){
    setAddEquipe(false)
  }
  function novoHandler2(equipe){
    setAddEquipe([...equipes, equipe])
  }
  return (
    <div className='container mt-3'>
    <NovaEquipe show={AddEquipe} cHandler={modalAddEquipeClose} novoHandler2={novoHandler2}/>
    <div className='d-flex flex-row justify-content-between w-100 mb-3'>
        <h1>Equipe</h1>
        <Button className="m-2" onClick={modalAddEquipe}>Nova Equipe</Button>
      </div>
    <StyledEngineProvider injectFirst>
      <Table rows={equipes} />
    </StyledEngineProvider>
  </div>

  )
};

export default Equipes;