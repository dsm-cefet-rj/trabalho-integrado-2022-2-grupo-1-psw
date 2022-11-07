import React from 'react';
import Popup from 'react';
import './modalAddEquipe.css';
import { Modal, Button } from 'react-bootstrap';
import FormsEquipe from './FormsEquipe';

function NovaEquipe(props) {
  function novoHandler(equipe){
    props.novoHandler2(equipe)
  }
  return (
    <Modal show={props.show}>
      <Modal.Header>
        <div className='d-flex flex-row justify-content-between w-100'>
          <h1>Nova Equipe</h1>
          <Button className='m-2' onClick={props.cHandler}>X</Button>
        </div>
      </Modal.Header>
      <Modal.Body className='container'>
        <FormsEquipe novoHandler={novoHandler}/>
      </Modal.Body>
    </Modal>
  )
};
 export default NovaEquipe;