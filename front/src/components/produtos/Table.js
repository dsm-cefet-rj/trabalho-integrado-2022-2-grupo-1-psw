import Table from 'react-bootstrap/Table';
import '../../styles/produtos.css';
import { Button } from 'react-bootstrap';
import {FaTrashAlt} from 'react-icons/fa'
import { useRecoilState } from "recoil";
import { modalGProduto } from "../../states/produto";

function Row(props) {
  const [GProduto, setmodalGProduto] = useRecoilState(modalGProduto);

  function removerProduto() {
    props.removeHandler(props.obj.index);
  }

  function modalGProdutoON() {
    setmodalGProduto(true);
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
  function removeProduto(produto) {
    props.removeHandler(produto);
  }

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
              <Row removeHandler={removeProduto} obj={{ ...row, index: i + 1 }} />
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}