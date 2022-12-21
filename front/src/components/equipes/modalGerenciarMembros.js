import React from "react";
import "../../styles/modalAddEquipe.css";
import { Modal, Button } from "react-bootstrap";
import FormsEquipe from "./FormsEquipe";
import { nomeNEquipe, modalGEquipe} from "../../states/equipe";
import { useRecoilState } from "recoil";

function GerenciarEquipe(props) {
  const [GEquipe, setmodalGEquipe] = useRecoilState(modalGEquipe);
  

  function modalGEquipeClose() {
    setmodalGEquipe(false);
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
