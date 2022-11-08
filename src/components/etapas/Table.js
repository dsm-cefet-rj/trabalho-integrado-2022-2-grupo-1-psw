import Table from 'react-bootstrap/Table';
import '../../styles/produtos.css';
import { Button } from 'react-bootstrap';

function Row(props) {
  function removerEtapa(){
  props.removeHandler (props.obj.index)

  }
  return (
    <tr>
      <td className='ps-4'>{props.obj.index}</td>
      <td className='w-50'>{props.obj.nome}</td>
      <td>{props.obj.duracao}</td>
      
      <td>
        <Button onClick={removerEtapa} className="p-1">Remover</Button>
      </td>
    </tr>
  )
}

export default function simpleTable(props) {

  function removeEtapa(etapa) {
props.removeHandler (etapa)

  }

  return (
    <div className="border rounded bg-light t-size overflow-auto">
      <Table variant='light'>
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
            return (<Row removeHandler={removeEtapa} obj={{ ...row, index: i + 1 }} />)
          })}
        </tbody>
      </Table>
    </div>
  );
}