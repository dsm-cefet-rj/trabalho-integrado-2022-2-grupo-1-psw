import Table from 'react-bootstrap/Table';
import '../../styles/produtos.css';
import { Button } from 'react-bootstrap';

function Row(props) {
  function removerProduto(){

  }
  return (
    <tr>
      <td className='ps-4'>{props.obj.index}</td>
      <td className='w-50'>{props.obj.nome}</td>
      <td>{props.obj.codigo}</td>
      <td>{props.obj.quantidade}</td>
      <td>
        <Button className="p-1">Remover</Button>
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
            return (<Row obj={{ ...row, index: i + 1 }} />)
          })}
        </tbody>
      </Table>
    </div>
  );
}