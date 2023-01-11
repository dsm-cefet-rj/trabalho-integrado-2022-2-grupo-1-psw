import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useRecoilState } from 'recoil';
import React, { useState } from 'react'; 
import {emailConvite} from "../../states/equipe";
import 'react-email-mask/dist/index.css';


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
      <Form.Group className="mb-3 d-flex justify-content-between" controlId="formEmail">
       <div className="d-flex flex-column w-75">
        <div>
          <Form.Label>Email</Form.Label>
        </div>
        <div>
          <Form.Control type="email"
          value={email} required
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Digite o email para adicionar um membro"
          maxLength={30} />
          <Form.Control.Feedback type="invalid">
              Campo vazio ou formato inválido!
          </Form.Control.Feedback>
        </div>
      </div>

      <div className="d-flex flex-column">
        <div>
          <Form.Label className="opacity-0">Email</Form.Label>
        </div>
        <div>
          <Button type="submit" variant="primary" className="text-nowrap ms-2" >
            Adicionar Membro
          </Button>
        </div>
      </div>
        
      </Form.Group>
    </Form>
    
  );
}
export default AdicionarMembro;