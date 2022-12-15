import { Routes, Route } from "react-router-dom";
import Cadeias from "../pages/Cadeias";
import Dashboard from "../pages/Dashboard";
import Equipes from "../pages/Equipes";
import NovoProduto from "../components/produtos/NovoProduto";
import Produtos from "../pages/Produtos";
import Relatorios from "../pages/Relatorios";
import Usuarios from "../pages/Usuarios";
import Etapas from "../pages/Etapas";
import Signin from "../pages/Signin";
import Signup from "../pages/Signup";
import { ReactFlowProvider } from "reactflow";
import useAuth from "../hooks/useAuth";
import { Fragment } from "react";

const Private = ({ Item }) => {
  const { signed } = useAuth();

  return signed > 0 ? <Item /> : <Signin />;
};

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Signin />} />
      <Route exact path="/signup" element={<Signup />} />
      <Route path="/cadeias" element={
        <ReactFlowProvider>
          <Cadeias />
        </ReactFlowProvider>
      } />
      <Route path="/" element={<Dashboard />} />
      <Route path="/equipes" element={<Equipes />} />
      <Route path="/novoProduto" element={<NovoProduto />} />
      <Route path="/produtos" element={<Produtos />} />
      <Route path="/relatorios" element={<Relatorios />} />
      <Route path="/usuarios" element={<Usuarios />} />
      <Route path="/etapas" element={<Etapas />} />
    </Routes>
  );
}

export default Router;
