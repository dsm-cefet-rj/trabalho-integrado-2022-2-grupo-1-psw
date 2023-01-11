import Table from "react-bootstrap/Table";
import "../../styles/produtos.css";
import { Button } from "react-bootstrap";
import {modalNEtapa, listaEtapa} from '../../states/etapa'
import NovaEtapa from "../../components/etapas/NovaEtapa.js";
import { useRecoilState } from "recoil";
import { EtapaRemove } from "../../service/etapa";
import { useState } from "react";

function Row(props) {


  const [etapas, setEtapas] = useRecoilState(listaEtapa);

  const removeEtapaResource = async (index) => {
    const user = JSON.parse(localStorage.getItem("user_token"));
    const etapaResource = await EtapaRemove({dono:user.email, nome:props.obj.nome});
    if(!!etapaResource.status){
      let e = [...etapas];
      e.splice(index - 1, 1);
      setEtapas(e);
    }else{
      window.confirm(etapaResource.message);
    }
  }

  function removeEtapa() {
    let etapa = props.obj.index
    let c = window.confirm("deseja apagar está etapa?");
    if (!c) {
      return;
    }
    removeEtapaResource(etapa);
  }


  
  return (
    <tr>
      <td className="ps-4">{props.obj.index}</td>
      <td className="w-50">{props.obj.nome}</td>
      <td>{props.obj.duracao}</td>

      <td>
        <Button onClick={removeEtapa} className="p-1">
          Remover
        </Button>
      </td>
    </tr>
  );
}

export default function SimpleTable(props) {

  const [sorter, setSorter] = useState(-1);
  const [etapas, setEtapas] = useRecoilState(listaEtapa);

  function sortByHeader(order) {
    setSorter(order);
    const props = [
      "nome",
      "duracao",
    ]

    const propName = props[order];

    const newOrder = [...etapas].sort((a, b) => {
      console.log(typeof(a[propName]));
      if(typeof(a[propName]) === "number"){
        return a[propName] - b[propName];
      }else{
        return a[propName].localeCompare(b[propName]);
      }
    });

    setEtapas(newOrder);
  }

  return (
    <div className="border rounded bg-light t-size overflow-auto">
      <Table variant="light">
        <thead>
          <tr>
            <th></th>
            <th onClick={() => sortByHeader(0)} className={sorter === 0 ? "text-primary" : "text-dark"}>Nome</th>
            <th onClick={() => sortByHeader(1)} className={sorter === 1 ? "text-primary" : "text-dark"}>Duração</th>

            <th></th>
          </tr>
        </thead>
        <tbody>
          {props.rows.map((row, i) => {
            return (
              <Row  obj={{ ...row, index: i + 1 }} />
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}
