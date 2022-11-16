import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";

function Forms(props) {
  const [nome, setNome] = useState();
  const [duracao, setDuracao] = useState();

  function retornaEtapa() {
    let etapa = { nome, duracao };
    props.novoHandler(etapa);
  }

  return (
    <Form>
      <Form.Group className="mb-3" controlId="formNome">
        <Form.Label>Nome</Form.Label>
        <Form.Control
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          type="string"
          placeholder="Digite o nome da etapa"
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formDuracao">
        <Form.Label>Duração</Form.Label>
        <Form.Control
          value={duracao}
          onChange={(e) => setDuracao(e.target.value)}
          type="string"
          placeholder="Digite a duração da etapa"
        />
      </Form.Group>

      <Button variant="primary" className="m-2" onClick={retornaEtapa}>
        Criar Etapa
      </Button>
    </Form>
  );
}

export default Forms;
