import React from "react";
import "../../styles/modalAddEquipe.css";
import { Modal, Button } from "react-bootstrap";
import FormsEquipe from "./FormsEquipe";
import { nomeNEquipe, modalGEquipe} from "../../states/equipe";
import { useRecoilState } from "recoil";
import FormsAdicionarMembro from "../equipes/FormsAdicionarMembro"
import Table from "react-bootstrap/Table";

function Row(props) {
  return (
    <tr>
      <td className="ps-4">{props.obj.email}</td>
    
      <td>
         {<Button className="p-1" >
          Remover
        </Button>}
      </td>
    </tr>
  );
}
function GerenciarEquipe(props) {
  const [GEquipe, setmodalGEquipe] = useRecoilState(modalGEquipe);
  

  function modalGEquipeClose() {
    setmodalGEquipe(false);
  }
  
  function removerEquipe(equipe) {
    props.removeHandler(equipe);
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
          <div className= "GerenciaMembros border border-secondary rounded">
          <Table variant="light">
          <thead>
            <tr>
              <th>Email</th>
              <th>Remover</th>
            </tr>
           </thead>
           <tbody>
           {[{email:'teste@gmail.com'}].map((row, i) => {
            return (
              <Row
                removeHandler={removerEquipe}
                obj={{ ...row, index: i + 1 }}
              />
            );
          })}
        </tbody>

            </Table>
            </div>
      </Modal.Body>
    </Modal>
  );
}
export default GerenciarEquipe;
