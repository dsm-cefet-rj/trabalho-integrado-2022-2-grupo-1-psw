import Forms from './Forms.js'
import { Modal, Button } from 'react-bootstrap';

function NovaEtapa(props) {
  function novoHandler(etapa){
    props.novoHandler2(etapa)
  }
  return (
    <Modal show={props.show}>
      <Modal.Header>
        <div className='d-flex flex-row justify-content-between w-100'>
          <h1>Nova etapa</h1>
          <Button className='m-2' onClick={props.cHandler}>X</Button>
        </div>
      </Modal.Header>
      <Modal.Body className='container'>
        <Forms novoHandler={novoHandler}/>
      </Modal.Body>
    </Modal>
  )
};

export default NovaEtapa;