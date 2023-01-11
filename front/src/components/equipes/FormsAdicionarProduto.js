import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useRecoilState } from "recoil";
import React, { useState } from "react";
import {
  emailConvite,
  produtoConvite,
  equipeGerenciada as equipeGerenciadaAtom,
  listaEquipe as listaEquipeAtom
} from "../../states/equipe";
import "react-email-mask/dist/index.css";
import { EquipeAddProduto } from "../../service/equipe";

function AdicionarProduto() {
  const [listaEquipe, setListaEquipe] = useRecoilState(listaEquipeAtom);
  const [equipeGerenciada, setEquipeGerenciada] = useRecoilState(equipeGerenciadaAtom);
  const [codigo, setCodigo] = useRecoilState(produtoConvite);

  const [validated, setValidated] = useState(false);
  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
    if (form.checkValidity() === true) {
      const produtoObj = {
        equipe: listaEquipe[equipeGerenciada].nome,
        codigo
      };
      const resp = await EquipeAddProduto(produtoObj);
      if (!resp.status) {
        window.alert(resp.message);
        return;
      }
      let equipes = [...listaEquipe];
      let newObj = Object.assign({}, equipes[equipeGerenciada]);

      newObj['produtos'] = Array.from(newObj['produtos']);
      newObj['produtos'].push(codigo)
      equipes[equipeGerenciada] = newObj;
      setListaEquipe(equipes);

      window.alert("Produto adicionado com sucesso!");
    }
  };

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Form.Group
        className="mb-3 d-flex justify-content-between"
        controlId="formEmail"
      >
        <div className="d-flex flex-column w-75">
          <div>
            <Form.Label>Código</Form.Label>
          </div>
          <div>
            <Form.Control
              type="text"
              value={codigo}
              required
              onChange={(e) => setCodigo(e.target.value)}
              placeholder="Digite o código para adicionar um produto"
              maxLength={30}
            />
            <Form.Control.Feedback type="invalid">
              Campo vazio ou formato inválido!
            </Form.Control.Feedback>
          </div>
        </div>

        <div className="d-flex flex-column">
          <div>
            <Form.Label className="opacity-0">Produto</Form.Label>
          </div>
          <div>
            <Button
              type="submit"
              variant="primary"
              className="text-nowrap ms-2"
            >
              Adicionar
            </Button>
          </div>
        </div>
      </Form.Group>
    </Form>
  );
}
export default AdicionarProduto;
