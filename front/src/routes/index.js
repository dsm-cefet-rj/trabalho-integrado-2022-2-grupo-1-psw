import { Routes, Route } from "react-router-dom";
import Cadeias from "../pages/Cadeias";
import Dashboard from "../pages/Dashboard";
import Equipes from "../pages/Equipes";
import NovoProduto from "../components/produtos/NovoProduto";
import Produtos from "../pages/Produtos";
import Usuarios from "../pages/Dashboard";
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
      <Route
        path="/cadeias"
        element={
          <ReactFlowProvider>
            <Cadeias />
          </ReactFlowProvider>
        }
      />
      <Route exact path="/" element={<Private Item={Dashboard} />} />
      <Route exact path="/equipes" element={<Private Item={Equipes} />} />
      <Route
        exact
        path="/novoProduto"
        element={<Private Item={NovoProduto} />}
      />
      <Route exact path="/produtos" element={<Private Item={Produtos} />} />
      <Route exact path="/dashboard" element={<Private Item={Dashboard} />} />
      <Route exact path="/etapas" element={<Private Item={Etapas} />} />
    </Routes>
  );
}

export default Router;
