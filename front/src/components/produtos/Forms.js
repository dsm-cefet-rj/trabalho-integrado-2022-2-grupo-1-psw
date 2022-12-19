import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useRecoilState } from 'recoil';
import {nomeNProduto, codigoNProduto, quantidadeNProduto} from '../../states/produto'

function Forms(props) {
  const [nome, setNome] = useRecoilState(nomeNProduto)
  const [codigo, setCodigo] = useRecoilState(codigoNProduto)
  const [quantidade, setQuantidade] = useRecoilState(quantidadeNProduto)

  function retornaProduto(){
    let produto = {nome, codigo, quantidade}
    props.novoHandler(produto)
  }

  return (
    <Form>
      <Form.Group className="mb-3" controlId="formNome">
        <Form.Label>Nome</Form.Label>
        <Form.Control value={nome} onChange={(e) => setNome(e.target.value)} maxLength={30} type="string" placeholder="Digite o nome do produto" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formCodigo">
        <Form.Label>Código</Form.Label>
        <Form.Control value={codigo} onChange={(e) => setCodigo(e.target.value)} maxLength={10} type="string" placeholder="Digite o código do produto" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formQuantidade">
      <Form.Label>Quantidade</Form.Label>
        <Form.Control value={quantidade} onChange={(e) => setQuantidade(e.target.value)} type="number" label="Digite a quantidade do produto" />
      </Form.Group>

      <Button variant="primary" className='m-2' onClick={retornaProduto}>
        Criar Produto
      </Button>
    </Form>
  );
}

export default Forms;