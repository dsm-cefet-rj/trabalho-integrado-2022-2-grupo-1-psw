import NavbarComponent from "../components/Navbar";
import CollapsibleTable from "../components/dashboard/CollapsibleTable";
import { useRecoilState } from "recoil";
import { useState, useEffect } from "react";
import { EtapaGet } from "../service/etapa";
import { listaEtapa } from "../states/etapa";
import { DashboardLoadAll } from "../service/dashboard";
import { dashboardProdutosAtom } from "../states/produto";

function Dashboard() {
  const [mounted, setMounted] = useState(false);
  const [etapas, setEtapas] = useRecoilState(listaEtapa);
  const [dashboard, setDashboard] = useRecoilState(dashboardProdutosAtom);

  async function loadResources() {
    const user = JSON.parse(localStorage.getItem("user_token"));

    const etapaResource = await EtapaGet(user);
    const produtosResource = await DashboardLoadAll(user);
    const prodRes = produtosResource.data?.map(v => {
      let obj = {...v}
      obj.etapa = obj.etapa ? JSON.parse(obj.etapa) : null
      obj.duracao = obj.etapa?.duracao;
      obj.etapa = obj.etapa?.codigo;
      return obj;
    });
    console.log(prodRes)
    setDashboard(prodRes);
    setEtapas(etapaResource.data);
  }

  useEffect(() => {
    if (!mounted) {
      loadResources();
      setMounted(true);
    }
  }, []);

  return (
    <div>
      <div>
        <NavbarComponent />
      </div>
      <div className="container mt-3">
        <CollapsibleTable />
      </div>
    </div>
  );
}

export default Dashboard;
