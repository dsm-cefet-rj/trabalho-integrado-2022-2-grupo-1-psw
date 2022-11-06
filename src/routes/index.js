import {
  Routes,
  Route
} from 'react-router-dom';

import Acesso from '../pages/Acesso';
import Cadeias from '../pages/Cadeias';
import Dashboard from '../pages/Dashboard';
import Equipes from '../pages/Equipes';
import NovoProduto from '../pages/NovoProduto';
import Produtos from '../pages/Produtos';
import Relatorios from '../pages/Relatorios';
import Usuarios from '../pages/Usuarios';
import Etapas from '../pages/Etapas';

function Router() {

  return (
    <Routes>
      <Route path='/acesso' element={<Acesso/>}/>
      <Route path='/cadeias' element={<Cadeias/>}/>
      <Route path='/' element={<Dashboard/>}/>
      <Route path='/equipes' element={<Equipes/>}/>
      <Route path='/novoProduto' element={<NovoProduto/>}/>
      <Route path='/produtos' element={<Produtos/>}/>
      <Route path='/relatorios' element={<Relatorios/>}/>
      <Route path='/usuarios' element={<Usuarios/>}/>
      <Route path='/etapas' element={<Etapas/>}/>
    </Routes>
  );
}

export default Router;