import Table from 'react-bootstrap/Table';
import '../../styles/produtos.css';
import { Button } from 'react-bootstrap';
import {FaTrashAlt} from 'react-icons/fa'
import { useRecoilState } from "recoil";
import { listaProduto, modalGProduto } from "../../states/produto";
import { ProdutoDelete } from '../../service/produto';

function Row(props) {
  const [produtos, setProdutos] = useRecoilState(listaProduto)

  async function removerProduto() {
    const user = JSON.parse(localStorage.getItem("user_token"));
    let c = window.confirm("deseja apagar está etapa?");
    if(!c){
     return;
    }

    const resp = await ProdutoDelete({
      dono:user.email,
      codigo: props.obj.codigo
    });
    if(!resp.status){
      window.alert(resp.message);
      return;
    }
    let e =  [...produtos]
    e.splice (parseInt(props.obj.index)-1, 1);
    setProdutos (e) 
  }

  return (
    <tr>
      <td className='ps-4'>{props.obj.index}</td>
      <td className='w-50'>{props.obj.nome}</td>
      <td>{props.obj.codigo}</td>
      <td>{props.obj.quantidade}</td>
      <td>
      <Button onClick={removerProduto} className="p-1 px-2">
          <FaTrashAlt/>
        </Button>
      </td>
    </tr>
  )
}

export default function simpleTable(props) {

  return (
    <div className="border rounded bg-light t-size overflow-auto">
      <Table variant='light'>
        <thead>
          <tr>
            <th></th>
            <th>Nome</th>
            <th>Código</th>
            <th>Quantidade</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {props.rows.map((row, i) => {
            return (
              <Row obj={{ ...row, index: i + 1 }} />
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}