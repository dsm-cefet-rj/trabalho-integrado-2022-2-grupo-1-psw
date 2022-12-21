import React from "react";
import "../../styles/modalAddEquipe.css";
import { Modal, Button } from "react-bootstrap";
import FormsEquipe from "./FormsEquipe";
import { nomeNEquipe, modalNEquipe } from "../../states/equipe";
import { useRecoilState } from "recoil";

function NovaEquipe(props) {
  const [AddEquipe, setmodalAddEquipe] = useRecoilState(modalNEquipe);
  const [nome, setNome] = useRecoilState(nomeNEquipe)


  function modalAddEquipeClose() {
    setmodalAddEquipe(false);
    setNome('');
  }
  
  return (
    <Modal show={!!AddEquipe}>
      <Modal.Header>
        <div className="d-flex flex-row justify-content-between w-100">
          <h1>Nova Equipe</h1>
          <Button className="m-2" onClick={modalAddEquipeClose}>
            X
          </Button>
        </div>
      </Modal.Header>
      <Modal.Body className="container">
        <FormsEquipe/>
      </Modal.Body>
    </Modal>
  );
}
export default NovaEquipe;
