import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useRecoilState } from 'recoil';
import React, { useState } from 'react'; 
import { listaEquipe, modalNEquipe, nomeNEquipe } from "../../states/equipe";
import { EquipeCreate } from "../../service/equipe";



function FormsEquipe(props) {
  const [nome, setNome] = useRecoilState(nomeNEquipe)
  const [equipes, setEquipe] = useRecoilState(listaEquipe);
  const [AddEquipe, setmodalAddEquipe] = useRecoilState(modalNEquipe);


  const [validated, setValidated] = useState(false);

  const handleSubmit = async (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
    if (form.checkValidity() === true){
      event.preventDefault();
      const user = JSON.parse(localStorage.getItem("user_token"));
      const equipeObj = {
          "dono":user.email,
          nome
      }
      const resp = await EquipeCreate(equipeObj);
      if(!resp.status){
        window.alert(resp.message);
        return;
      }
      setEquipe([...equipes, {nome}]);
      setNome('');
      setmodalAddEquipe(false);
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
