import React from "react";
import Forms from "./Forms.js";
import { Modal, Button } from "react-bootstrap";
import {
  nomeNProduto,
  codigoNProduto,
  quantidadeNProduto,
  modalNProduto,
} from "../../states/produto";
import { useRecoilState } from "recoil";

function NovoProduto(props) {
  const [AddProduto, setmodalAddProduto] = useRecoilState(modalNProduto);
  const [nome, setNome] = useRecoilState(nomeNProduto);
  const [codigo, setCodigo] = useRecoilState(codigoNProduto);
  const [quantidade, setQuantidade] = useRecoilState(quantidadeNProduto);

  function modalAddProdutoClose() {
    setmodalAddProduto(false);
    setNome("");
    setCodigo("");
    setQuantidade();
  }

  return (
    <Modal show={!!AddProduto}>
      <Modal.Header>
        <div className="d-flex flex-row justify-content-between w-100">
          <h1>Novo Produto</h1>
          <Button className="m-2" onClick={modalAddProdutoClose}>
            X
          </Button>
        </div>
      </Modal.Header>
      <Modal.Body className="container">
        <Forms />
      </Modal.Body>
    </Modal>
  );
}

export default NovoProduto;
