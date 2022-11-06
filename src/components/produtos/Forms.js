import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Forms() {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formNome">
        <Form.Label>Nome</Form.Label>
        <Form.Control type="string" placeholder="Digite o nome do produto" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formCodigo">
        <Form.Label>Código</Form.Label>
        <Form.Control type="string" placeholder="Digite o código do produto" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formQuantidade">
      <Form.Label>Quantidade</Form.Label>
        <Form.Control type="number" label="Digite a quantidade do produto" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formCadeia">
      <Form.Label>Cadeia Produtiva</Form.Label>
        <Form.Control type="string" placeholder="Digite a cadeia produtiva do produto" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formEtapa">
      <Form.Label>Etapa Produtiva</Form.Label>
        <Form.Control type="string" placeholder="Digite a etapa do produto" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Criar Produto
      </Button>

    </Form>
  );
}

export default Forms;