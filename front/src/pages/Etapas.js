import { StyledEngineProvider } from "@mui/material/styles";
import Table from "../components/etapas/Table.js";
import { Button } from "react-bootstrap";
import NovaEtapa from "../components/etapas/NovaEtapa.js";
import { useRecoilState } from "recoil";
import { modalNEtapa, listaEtapa } from "../states/etapa";
import NavbarComponent from "../components/Navbar";
import { useEffect, useState } from "react";
import { EtapaGet } from "../service/etapa.js";

function Etapas() {
  const [mounted, setMounted] = useState(false);

  const [modal, setModal] = useRecoilState(modalNEtapa);
  const [etapas, setEtapas] = useRecoilState(listaEtapa);

  function NovaEtapaModal() {
    setModal(true);
  }

  async function loadResources() {
    const user = JSON.parse(localStorage.getItem("user_token"));
    const etapaResource = await EtapaGet(user);
    setEtapas(etapaResource.data);
    setMounted(true);
  }

  useEffect(() => {
    if (!mounted) {
      loadResources();
    }
  }, []);

  return (
    <div>
      <NavbarComponent />
      <div className="container mt-3">
        <NovaEtapa show={modal} />
        <div className="d-flex flex-row justify-content-between w-100 mb-3">
          <h1>Etapa</h1>
          <Button className="m-2" onClick={NovaEtapaModal}>
            Nova Etapa
          </Button>
        </div>
        <StyledEngineProvider injectFirst>
          <Table rows={etapas} />
        </StyledEngineProvider>
      </div>
    </div>
  );
}

export default Etapas;
