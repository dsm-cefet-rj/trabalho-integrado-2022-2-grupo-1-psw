import { useState } from 'react';
import { StyledEngineProvider } from '@mui/material/styles';
import Table from '../components/etapas/Table.js'
import { Button } from 'react-bootstrap';
import NovaEtapa from '../components/etapas/NovaEtapa.js';

function Etapas() {
  const [NEtapasModal, setNEtapasModal] = useState(false)
  const [etapas, setEtapas] = useState([])
  function NovaEtapaModal() {
    setNEtapasModal(true)
  }
  function NovaEtapaModalClose(){
    setNEtapasModal(false)
  }
  function novoHandler2(etapa){
    setEtapas([...etapas, etapa])
    setNEtapasModal (false)
    
  }
  function removeEtapa(etapa) {
   let c = window.confirm("deseja apagar está etapa?")
   if(!c){

    return
   }



   
    let e =  [...etapas]
      e.splice (etapa -1,1)
      setEtapas (e) 

      }


  return (
    <div className='container mt-3'>
      <NovaEtapa show={NEtapasModal} cHandler={NovaEtapaModalClose} novoHandler2={novoHandler2}/>
      <div className='d-flex flex-row justify-content-between w-100 mb-3'>
          <h1>Etapa</h1>
          <Button className="m-2" onClick={NovaEtapaModal}>Nova Etapa</Button>
        </div>
      <StyledEngineProvider injectFirst>
        <Table rows={etapas} removeHandler={removeEtapa}/>
      </StyledEngineProvider>
    </div>
  )
};

export default Etapas;