import React, { useState } from "react";
import "../../styles/modalAddEquipe.css";
import { Modal, Button } from "react-bootstrap";
import FormsEquipe from "./FormsEquipe";
import { useRecoilState } from "recoil";
import FormsAdicionarMembro from "../equipes/FormsAdicionarMembro";
import FormsAdicionarProduto from "../equipes/FormsAdicionarProduto";
import Table from "react-bootstrap/Table";
import {
  modalGEquipe,
  listaEquipe as listaEquipeAtom,
  equipeGerenciada as equipeGerenciadaAtom,
} from "../../states/equipe";
import { EquipeRemoveMember, EquipeRemoveProduto } from "../../service/equipe";

function RowMembro(props) {
  const [equipeGerenciada, setEquipeGerenciada] = useRecoilState(equipeGerenciadaAtom);
  const [listaEquipe, setListaEquipe] = useRecoilState(listaEquipeAtom);

  async function RemoverMembro() {

    let c = window.confirm("Deseja remover esse membro?");
    if (!c) {
      return;
    }

    const obj = {
      email:props.obj.email,
      equipe:listaEquipe[equipeGerenciada].nome
    }

    const resp = await EquipeRemoveMember(obj);
    if (!resp.status) {
      window.alert(resp.message);
      return;
    }

    let equipes = [...listaEquipe];
    let newObj = Object.assign({}, equipes[equipeGerenciada]);

    newObj['usuarios'] = newObj['usuarios'].filter(v => {
      return v !== props.obj.email;
    });

    equipes[equipeGerenciada] = newObj;
    setListaEquipe(equipes);
    window.alert("Membro removido com sucesso!");

  }

  return (
    <tr>
      <td className="ps-4">{props.obj.email}</td>
      <td>
        <Button className="p-1" size="sm" onClick={RemoverMembro}>Remover</Button>
      </td>
    </tr>
  );
}

function RowProduto(props) {
  const [equipeGerenciada, setEquipeGerenciada] = useRecoilState(equipeGerenciadaAtom);
  const [listaEquipe, setListaEquipe] = useRecoilState(listaEquipeAtom);

  async function RemoverMembro() {

    let c = window.confirm("Deseja remover esse produto?");
    if (!c) {
      return;
    }

    const obj = {
      codigo:props.obj.codigo,
      equipe:listaEquipe[equipeGerenciada].nome
    }

    const resp = await EquipeRemoveProduto(obj);
    if (!resp.status) {
      window.alert(resp.message);
      return;
    }

    let equipes = [...listaEquipe];
    let newObj = Object.assign({}, equipes[equipeGerenciada]);

    newObj['produtos'] = newObj['produtos'].filter(v => {
      return v !== props.obj.codigo;
    });

    equipes[equipeGerenciada] = newObj;
    setListaEquipe(equipes);
    window.alert("Produto removido com sucesso!");

  }

  return (
    <tr>
      <td className="ps-4 py-2">{props.obj.codigo}</td>
      <td className="">
        <Button className="p-1" size="sm" onClick={RemoverMembro}>Remover</Button>
      </td>
    </tr>
  );
}

function GerenciarEquipe(props) {
  const [manageType, setManageType] = useState(1);

  const [listaEquipe, setListaEquipe] = useRecoilState(listaEquipeAtom);
  const [equipeGerenciada, setEquipeGerenciada] = useRecoilState(equipeGerenciadaAtom);
  const [GEquipe, setmodalGEquipe] = useRecoilState(modalGEquipe);

  function modalGEquipeClose() {
    setmodalGEquipe(false);
    setEquipeGerenciada(null);
  }

  return (
    <Modal show={!!GEquipe}>
      <Modal.Header>
        <div className="d-flex flex-row justify-content-between w-100">
          <h1>Gerenciar Equipe</h1>
          <Button className="m-2" onClick={modalGEquipeClose}>
            X
          </Button>
        </div>
      </Modal.Header>
      <Modal.Body className="container">
        <h5 className="mt-2 mb-3 text-nowrap">Equipe: <span className="fw-bold">{!!equipeGerenciada ? listaEquipe[parseInt(equipeGerenciada)].nome : null}</span></h5>
          <ul className="nav nav-tabs nav-fill">
            <li className="nav-item">
              <a className={"nav-link " + (manageType === 1 ? "active" : null)} onClick={() => setManageType(1)}>Membros</a>
            </li>
            <li className="nav-item">
              <a className={"nav-link " + (manageType === 2 ? "active" : null)} onClick={() => setManageType(2)}>Produtos</a>
            </li>
          </ul>
          <div className="border rounded-bottom p-2 border-top-0">
          { manageType === 1 ? 
            <div>
              <FormsAdicionarMembro />
              <div className="GerenciaMembros border border-secondary rounded">
                <Table variant="light">
                  <thead>
                    <tr>
                      <th className="w-75">Membros</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {!!equipeGerenciada ? listaEquipe[parseInt(equipeGerenciada)].usuarios?.map((row, i) => {
                      return (
                        <RowMembro obj={{ email:row, index: i + 1 }}/>
                      );
                    }) : null}
                  </tbody>
                </Table>
              </div>
            </div>
          :
            <div>
              <FormsAdicionarProduto />
              <div className="GerenciaMembros border border-secondary rounded">
                <Table variant="light">
                  <thead>
                    <tr>
                      <th className="w-75">Produtos</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {!!equipeGerenciada ? listaEquipe[parseInt(equipeGerenciada)].produtos?.map((row, i) => {
                      return (
                        <RowProduto obj={{ codigo:row, index: i + 1 }}/>
                      );
                    }) : null}
                  </tbody>
                </Table>
              </div>
            </div>
          }
        </div>
      </Modal.Body>
    </Modal>
  );
}
export default GerenciarEquipe;
