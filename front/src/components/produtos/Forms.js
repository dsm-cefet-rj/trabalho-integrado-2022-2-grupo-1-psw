import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import React, { useState } from "react";
import { useRecoilState } from "recoil";
import {
  nomeNProduto,
  codigoNProduto,
  quantidadeNProduto,
  listaProduto,
  modalNProduto,
} from "../../states/produto";
import { ProdutoCreate } from "../../service/produto";

function Forms(props) {
  const [nome, setNome] = useRecoilState(nomeNProduto);
  const [codigo, setCodigo] = useRecoilState(codigoNProduto);
  const [quantidade, setQuantidade] = useRecoilState(quantidadeNProduto);
  const [produtos, setProduto] = useRecoilState(listaProduto);
  const [AddProduto, setmodalAddProduto] = useRecoilState(modalNProduto);

  const [validated, setValidated] = useState(false);

  const handleSubmit = async (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
    if (form.checkValidity() === true) {
      event.preventDefault();
      const user = JSON.parse(localStorage.getItem("user_token"));
      const produtoObj = {
        dono: user.email,
        codigo,
        nome,
        quantidade,
      };
      const resp = await ProdutoCreate(produtoObj);
      if (!resp.status) {
        window.alert(resp.message);
        return;
      }
      setProduto([...produtos, { nome, codigo, quantidade }]);
      setNome("");
      setCodigo("");
      setQuantidade();
      setmodalAddProduto(false);
    }
  };

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formNome">
        <Form.Label>Nome</Form.Label>
        <Form.Control
          required
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          maxLength={30}
          type="text"
          placeholder="Digite o nome do produto"
        />
        <Form.Control.Feedback type="invalid">
          Campo vazio ou formato inválido!
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formCodigo">
        <Form.Label>Código</Form.Label>
        <Form.Control
          value={codigo}
          required
          onChange={(e) => setCodigo(e.target.value)}
          maxLength={10}
          type="string"
          placeholder="Digite o código do produto"
        />
        <Form.Control.Feedback type="invalid">
          Campo vazio ou formato inválido!
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formQuantidade">
        <Form.Label>Quantidade</Form.Label>
        <Form.Control
          required
          value={quantidade}
          onChange={(e) => setQuantidade(e.target.value)}
          type="number"
          label="Digite a quantidade do produto"
        />
        <Form.Control.Feedback type="invalid">
          Campo vazio ou formato inválido!
        </Form.Control.Feedback>
      </Form.Group>

      <Button type="submit" variant="primary" className="m-2">
        Criar Produto
      </Button>
    </Form>
  );
}

export default Forms;
