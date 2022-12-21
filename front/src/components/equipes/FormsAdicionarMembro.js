import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useRecoilState } from 'recoil';
import React, { useState } from 'react'; 
import {emailConvite} from "../../states/equipe";
import { maskEmail } from 'react-email-mask'
import 'react-email-mask/dist/index.css'


function AdicionarMembro(){
    const [email, setEmail] = useRecoilState(emailConvite);

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
        setEmail();
    }
  }


return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <div className="d-flex justify-content-between">
      <Form.Group className="mb-3 d-flex justify-content-between" controlId="formEmail">
       <div> <Form.Label>Email</Form.Label>
        <Form.Control type="email"
          value={email} required
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Digite o email para adicionar um membro"
          maxLength={30}
        />
        </div>

        <div> <Form.Label>Email</Form.Label>
        <Button type="submit" variant="primary" className="m-2" >
       Adicionar Membro
      </Button>
        </div>

        <Form.Control.Feedback type="invalid">
            Campo vazio ou formato inválido!
        </Form.Control.Feedback>
        
      </Form.Group>
    
         </div>
    </Form>
    
  );
}
export default AdicionarMembro;