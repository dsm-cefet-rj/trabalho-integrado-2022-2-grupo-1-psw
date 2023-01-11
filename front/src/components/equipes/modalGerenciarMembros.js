import React from "react";
import "../../styles/modalAddEquipe.css";
import { Modal, Button } from "react-bootstrap";
import FormsEquipe from "./FormsEquipe";
import {
  listaEquipe as listaEquipeAtom,
  modalGEquipe,
  equipeGerenciada as equipeGerenciadaAtom
} from "../../states/equipe";
import { useRecoilState } from "recoil";
import FormsAdicionarMembro from "../equipes/FormsAdicionarMembro";

function GerenciarEquipe(props) {

  const [listaEquipe, setListaEquipe] = useRecoilState(listaEquipeAtom);
  const [equipeGerenciada, setEquipeGerenciada] = useRecoilState(equipeGerenciadaAtom);
  const [GEquipe, setmodalGEquipe] = useRecoilState(modalGEquipe);
  

  function modalGEquipeClose() {
    setmodalGEquipe(false);
    setEquipeGerenciada(null);
  }
  
  return (
    <Modal show={!!GEquipe}>
      <Modal.Header>
        <div className="d-flex flex-row justify-content-between w-100">
          <h1>Gerenciar Equipe</h1>
          <Button className="m-2" onClick={modalGEquipeClose}>
            X
          </Button>
        </div>
      </Modal.Header>
      <Modal.Body className="container">
        <FormsAdicionarMembro/>
      </Modal.Body>
    </Modal>
  );
}
export default GerenciarEquipe;
