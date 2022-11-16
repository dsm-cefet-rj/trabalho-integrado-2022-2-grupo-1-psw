import { StyledEngineProvider } from "@mui/material/styles";
import Table from "../components/etapas/Table.js";
import { Button } from "react-bootstrap";
import NovaEtapa from "../components/etapas/NovaEtapa.js";
import { useRecoilState } from "recoil";
import {modalNEtapa, listaEtapa} from '../states/etapa'

function Etapas() {
  const [modal, setModal] = useRecoilState(modalNEtapa);
  const [etapas, setEtapas] = useRecoilState(listaEtapa);

  function NovaEtapaModal() {
    setModal(true);
  }
  function NovaEtapaModalClose() {
    setModal(false);
  }
  function novoHandler2(etapa) {
    setEtapas([...etapas, etapa]);
    setModal(false);
  }
  function removeEtapa(etapa) {
    let c = window.confirm("deseja apagar está etapa?");
    if (!c) {
      return;
    }

    let e = [...etapas];
    e.splice(etapa - 1, 1);
    setEtapas(e);
  }

  return (
    <div className="container mt-3">
      <NovaEtapa
        show={modal}
        cHandler={NovaEtapaModalClose}
        novoHandler2={novoHandler2}
      />
      <div className="d-flex flex-row justify-content-between w-100 mb-3">
        <h1>Etapa</h1>
        <Button className="m-2" onClick={NovaEtapaModal}>
          Nova Etapa
        </Button>
      </div>
      <StyledEngineProvider injectFirst>
        <Table rows={etapas} removeHandler={removeEtapa} />
      </StyledEngineProvider>
    </div>
  );
}

export default Etapas;