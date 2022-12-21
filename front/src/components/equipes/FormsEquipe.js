import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useRecoilState } from 'recoil';
import React, { useState } from 'react'; 
import {nomeNEquipe} from '../../states/equipe'

function FormsEquipe(props) {
  const [nome, setNome] = useRecoilState(nomeNEquipe)

  function retornaEquipe() {
    let equipe = { nome };
    props.novoHandler(equipe);
  }
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
    if (form.checkValidity() === true){
      event.preventDefault();
      retornaEquipe();
    }
  }




  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formNome">
        <Form.Label>Nome</Form.Label>
        <Form.Control
          value={nome} required
          onChange={(e) => setNome(e.target.value)}
          type="string"
          placeholder="Digite o nome da equipe"
          maxLength={30}
          
        />
        <Form.Control.Feedback type="invalid">
            Campo vazio ou formato inválido!
        </Form.Control.Feedback>
      </Form.Group>

      <Button type = "submit" variant="primary" className="m-2" >
        Criar Equipe
      </Button>
    </Form>
  );
}

export default FormsEquipe;
