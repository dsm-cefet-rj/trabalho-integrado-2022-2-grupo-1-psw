import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useRecoilState } from 'recoil';
import React, { useState } from 'react'; 


function AdicionarMembro(){
    const [email, setEmail] = useState(emailConvite);


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
      setEquipe([...equipes, {nome}]);
      setNome('');
      setmodalAddEquipe(false);
    }
  }


return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control
          value={email} required
          onChange={(e) => setEmail(e.target.value)}
          type="string"
          placeholder="Digite o email para adicionar um membro"
          maxLength={30}
        />
        <Form.Control.Feedback type="invalid">
            Campo vazio ou formato inválido!
        </Form.Control.Feedback>
      </Form.Group>
      <Button type = "submit" variant="primary" className="m-2" >
       Adicionar Membro
      </Button>
    </Form>
  );
}
export default AdicionarMembro;