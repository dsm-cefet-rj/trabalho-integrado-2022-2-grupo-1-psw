import Table from "react-bootstrap/Table";
import "../../styles/modalAddEquipe.css";
import { Button } from "react-bootstrap";
import { useRecoilState } from "recoil";
import { modalGEquipe, listaEquipe } from "../../states/equipe";
import { EquipeDelete } from "../../service/equipe";

function Row(props) {
  const [equipes, setEquipe] = useRecoilState(listaEquipe);
  const [GEquipe, setmodalGEquipe] = useRecoilState(modalGEquipe);

  async function removerEquipe() {
    const user = JSON.parse(localStorage.getItem("user_token"));
    let c = window.confirm("Deseja apagar esta equipe?");
    if (!c) {
      return;
    }

    const resp = await EquipeDelete({
      dono: user.email,
      nome: props.obj.nome,
    });

    if (!resp.status) {
      window.alert(resp.message);
      return;
    }

    let e = [...equipes];
    e.splice(parseInt(props.obj.index) - 1, 1);
    setEquipe(e);
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
            return <Row obj={{ ...row, index: i + 1 }} />;
          })}
        </tbody>
      </Table>
    </div>
  );
}
