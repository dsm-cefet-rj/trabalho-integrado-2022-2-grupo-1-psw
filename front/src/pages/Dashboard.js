import NavbarComponent from "../components/Navbar";
import CollapsibleTable from "../components/dashboard/CollapsibleTable";
import { useRecoilState } from "recoil";
import { useState, useEffect } from "react";
import { EtapaGet } from "../service/etapa";
import { listaEtapa } from "../states/etapa";

function Dashboard() {
  const [mounted, setMounted] = useState(false);
  const [etapas, setEtapas] = useRecoilState(listaEtapa);

  async function loadResources() {
    const user = JSON.parse(localStorage.getItem("user_token"));

    const etapaResource = await EtapaGet(user);
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
