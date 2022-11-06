import Table from '../components/Table.js'
import '../styles/App.css';

function Produtos() {  
  return (
    <div className="Produtos">
      <h1>Produtos</h1>
      <a class="btn btn-primary" href="NovoProduto" role="button">Novo Produto</a>
        <div className="Table"> <Table/> </div>
    </div>
  )
};

export default Produtos;