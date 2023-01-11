import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useRecoilState } from 'recoil';
import React, { useState } from 'react';
import {nomeNEtapa, duracaoNEtapa,modalNEtapa, listaEtapa} from '../../states/etapa'
import { EtapaCreate } from "../../service/etapa";

function FormsEtapa(props) {
  const [nome, setNome] = useRecoilState(nomeNEtapa);
  const [duracao, setDuracao] = useRecoilState(duracaoNEtapa);
  const [_AddEtapa, setmodalAddEtapa] = useRecoilState(modalNEtapa);
  const [validated, setValidated] = useState(false);
  const [etapas, setEtapa] = useRecoilState(listaEtapa);
  /*function retornaEtapa() {
    let etapa = { nome, duracao };
    props.novoHandler(etapa);
  } */

  const createEtapa = async (etapa) => {
    const user = JSON.parse(localStorage.getItem("user_token"));
    const etapaResource = await EtapaCreate({...etapa, dono:user.email, ordem:etapas.length});
    if(!!etapaResource.status){
      setEtapa([...etapas, {nome:etapa.nome, duracao:etapa.duracao}]);
    }else{
      window.confirm(etapaResource.message);
    }
  }

const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
    if (form.checkValidity() === true){
      event.preventDefault();
      createEtapa({nome, duracao})
      setNome('');
      setmodalAddEtapa(false);
    }
    
  }
  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formNome">
        <Form.Label>Nome</Form.Label>
        <Form.Control
        required
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          type="string"
          placeholder="Digite o nome da etapa"
          maxLength={30}
        />
        <Form.Control.Feedback type="invalid">
            Campo vazio ou formato inválido!
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formDuracao">
        <Form.Label>Duração (Dias)</Form.Label>
        <Form.Control
        required
          value={duracao}
          onChange={(e) => setDuracao(e.target.value)}
          type="string"
          placeholder="Digite a duração da etapa"
        />
        <Form.Control.Feedback type="invalid">
            Campo vazio ou formato inválido!
        </Form.Control.Feedback>
      </Form.Group>

      <Button  type = "submit"variant ="primary" className="m-2">
        Criar Etapa
      </Button>
    </Form>
  );
}

export default FormsEtapa;
