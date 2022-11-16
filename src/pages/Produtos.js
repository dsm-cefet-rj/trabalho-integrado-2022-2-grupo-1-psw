import { useState } from 'react';
import { StyledEngineProvider } from '@mui/material/styles';
import Table from '../components/produtos/Table.js'
import { Button } from 'react-bootstrap';
import NovoProduto from '../components/produtos/NovoProduto.js';

function Produtos() {
  const [NProdutoModal, setNProdutoModal] = useState(false)
  const [produtos, setProdutos] = useState([])
  
  function NovoProdutoModal() {
    setNProdutoModal(true)
  }
  
  function NovoProdutoModalClose(){
    setNProdutoModal(false)
  }
  
  function novoHandler2(produto){
    setProdutos([...produtos, produto])
  }
  
  return (
    <div className='container mt-3'>
      <NovoProduto show={NProdutoModal} cHandler={NovoProdutoModalClose} novoHandler2={novoHandler2}/>
      <div className='d-flex flex-row justify-content-between w-100 mb-3'>
          <h1>Produto</h1>
          <Button className="m-2" onClick={NovoProdutoModal}>Novo Produto</Button>
        </div>
      <StyledEngineProvider injectFirst>
        <Table rows={produtos} />
      </StyledEngineProvider>
    </div>
  )
};

export default Produtos;