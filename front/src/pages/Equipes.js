import React, { useEffect } from "react";
import Table from "../components/equipes/TableEquipes.js";
import NovaEquipe from "../components/equipes/modalAddEquipe.js";
import { Button } from "react-bootstrap";
import { useRecoilState, useResetRecoilState} from 'recoil';
import { StyledEngineProvider } from '@mui/material/styles';
import {modalNEquipe, listaEquipe} from '../states/equipe'
import NavbarComponent from "../components/Navbar";
import {modalGEquipe} from "../states/equipe.js"
import GerenciarEquipe from "../components/equipes/modalGerenciarMembros.js";

function Equipes() {
  const [GEquipe, setmodalGEquipe] = useRecoilState(modalGEquipe);
  const [AddEquipe, setmodalAddEquipe] = useRecoilState(modalNEquipe);
  const [equipes, setEquipe] = useRecoilState(listaEquipe);

  function modalAddEquipe() {
    setmodalAddEquipe(true);
  }

  function removerEquipe(equipe) {
    let c = window.confirm("Deseja apagar esta equipe?");
    if (!c) {
      return;
    }

    let e = [...equipes];
    e.splice(equipe - 1, equipe);
    setEquipe(e);
  }

  useEffect(()=> {
    localStorage.setItem('listaEquipe', JSON.stringify(equipes))
  }, [equipes])


  return (
    <div>
      <NavbarComponent />
    <div className="container mt-3">
      <NovaEquipe/>
      <GerenciarEquipe/>
      <div className="d-flex flex-row justify-content-between w-100 mb-3">
        <h1>Equipe</h1>
        <Button className="m-2" onClick={modalAddEquipe}>
          Nova Equipe
        </Button>
      </div>
      <StyledEngineProvider injectFirst>
        <Table rows={equipes} removeHandler={removerEquipe} />
      </StyledEngineProvider>
    </div>
    </div>
  );
}

export default Equipes;
