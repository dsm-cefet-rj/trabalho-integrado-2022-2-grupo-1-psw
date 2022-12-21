import Table from 'react-bootstrap/Table';
import React from "react";
import "./modalAddEquipe.css";
import { Modal, Button } from "react-bootstrap";
import FormsEquipe from "./FormsEquipe";

function NovaEquipe(props) {
  function novoHandler(equipe) {
    props.novoHandler2(equipe);
  }

  function modalGerenciarMembros(){
  return (
    <div><Modal show={props.show}>
    <Modal.Header>
      <div className="d-flex flex-row justify-content-between w-100">
        <h1>Gerenciar Membros</h1>
        <Table>
    <thead>
      <tr>
        <th>#</th>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Username</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>Mark</td>
        <td>Otto</td>
        <td>@mdo</td>
      </tr>
      <tr>
        <td>2</td>
        <td>Jacob</td>
        <td>Thornton</td>
        <td>@fat</td>
      </tr>
      <tr>
        <td>3</td>
        <td colSpan={2}>Larry the Bird</td>
        <td>@twitter</td>
      </tr>
    </tbody>
  </Table>
);
      </div>
    </Modal.Header>
    <Modal.Body className="container">
      <FormsEquipe novoHandler={novoHandler} />
    </Modal.Body>
  </Modal></div>
    
  );
  }}
export default modalGerenciarMembros;