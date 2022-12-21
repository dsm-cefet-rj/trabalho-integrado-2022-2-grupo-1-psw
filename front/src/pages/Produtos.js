import { useRecoilState } from 'recoil';
import { StyledEngineProvider } from '@mui/material/styles';
import Table from '../components/produtos/Table.js'
import { Button } from 'react-bootstrap';
import NovoProduto from '../components/produtos/NovoProduto.js';
import {modalNProduto, listaProduto} from '../states/produto'
import popup from '../components/popup'
import NavbarComponent from "../components/Navbar";
import { useEffect } from 'react';

function Produtos() {
  const [modal, setModal] = useRecoilState(modalNProduto)
  const [produtos, setProdutos] = useRecoilState(listaProduto)

  useEffect(()=> {
    localStorage.setItem('listaProduto', JSON.stringify(produtos))
  }, [produtos])

  function NovoProdutoModal() {
    setModal(true)
  }
  
  function NovoProdutoModalClose(){
    setModal(false)
  }
  
  function novoHandler2(produto){
    setProdutos([...produtos, produto])
    setModal (false)
  }

  function removeProduto(produto) {
    let c = window.confirm("deseja apagar está etapa?");
    if(!c){
     return
    }
     let e =  [...produtos]
       e.splice (produto -1, 1)
       setProdutos (e) 
       }
  
  return (
    <div>
      <NavbarComponent />
      <div className='container mt-3'>
      <NovoProduto show={modal} cHandler={NovoProdutoModalClose} novoHandler2={novoHandler2}/>
      <div className='d-flex flex-row justify-content-between w-100 mb-3'>
          <h1>Produto</h1>
          <Button className="m-2" onClick={NovoProdutoModal}>Novo Produto</Button>
        </div>
      <StyledEngineProvider injectFirst>
        <Table rows={produtos} removeHandler={removeProduto}/>
      </StyledEngineProvider>
    </div>
    </div>
  );
}

export default Produtos;