import Table from "react-bootstrap/Table";
import "../../styles/produtos.css";
import { Button } from "react-bootstrap";
import {modalNEtapa, listaEtapa} from '../../states/etapa'
import NovaEtapa from "../../components/etapas/NovaEtapa.js";
import { useRecoilState } from "recoil";

function Row(props) {


  const [etapas, setEtapas] = useRecoilState(listaEtapa);



  function removeEtapa() {
    let etapa = props.obj.index
    let c = window.confirm("deseja apagar está etapa?");
    if (!c) {
      return;
    }

    let e = [...etapas];
    e.splice(etapa - 1, 1);
    setEtapas(e);
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

export default function simpleTable(props) {


  return (
    <div className="border rounded bg-light t-size overflow-auto">
      <Table variant="light">
        <thead>
          <tr>
            <th></th>
            <th>Nome</th>
            <th>Duração</th>

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
