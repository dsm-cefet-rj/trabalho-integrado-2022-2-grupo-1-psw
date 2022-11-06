import * as React from 'react';
import { StyledEngineProvider } from '@mui/material/styles';
import Table from '../components/produtos/Table.js'

function Produtos() {
  return (
    <div>
      <h1>Produtos</h1>
      <a class="btn btn-primary" href="NovoProduto" role="button">Novo Produto</a>
        <StyledEngineProvider injectFirst>
          <Table />
        </StyledEngineProvider>
    </div>
  )
};

export default Produtos;