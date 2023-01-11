import Table from "react-bootstrap/Table";
import "../../styles/modalAddEquipe.css";
import { Button } from "react-bootstrap";
import Equipes from "../../pages/Equipes";
import { useRecoilState } from "recoil";
import { modalGEquipe } from "../../states/equipe";
function Row(props) {

  const [GEquipe, setmodalGEquipe] = useRecoilState(modalGEquipe);

  function removerEquipe() {
    props.removeHandler(props.obj.index);
  }

  
    function modalGEquipeON() {
      setmodalGEquipe(true);
    }

  return (
    <tr>
      <td className="ps-4">{props.obj.index}</td>
      <td className="w-50">{props.obj.nome}</td>
      <td>{props.obj.codigo}</td>
      <td>{props.obj.qtdMembros}</td>
    
      <td>
      <Button className="p-1 me-3" onClick={modalGEquipeON}>
        Gerenciar
        </Button>
        <Button className="p-1" onClick={removerEquipe}>
          Remover
        </Button>
    
      </td>
    </tr>
  );
}

export default function simpleTable(props) {
  function removerEquipe(equipe) {
    props.removeHandler(equipe);
  }

  return (
    <div className="border rounded bg-light t-size overflow-auto">
      <Table variant="light">
        <thead>
          <tr>
            <th></th>
            <th>Nome da Equipe</th>
            <th>Gerente da Equipe</th>
            <th>Membros</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {props.rows.map((row, i) => {
            return (
              <Row
                removeHandler={removerEquipe}
                obj={{ ...row, index: i + 1 }}
              />
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}
