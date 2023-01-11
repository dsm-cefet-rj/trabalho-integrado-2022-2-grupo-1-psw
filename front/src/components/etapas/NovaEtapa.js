import Forms from "./Forms.js";
import { Modal, Button } from "react-bootstrap";
import { useRecoilState } from "recoil";
import { nomeNEtapa, modalNEtapa } from "../../states/etapa";
import FormsEtapa from "./Forms";
function NovaEtapa(props) {
  const [AddEtapa, setmodalAddEtapa] = useRecoilState(modalNEtapa);
  const [nome, setNome] = useRecoilState(nomeNEtapa);

  function modalAddEtapaClose() {
    setmodalAddEtapa(false);
    setNome("");
  }
  return (
    <Modal show={!!AddEtapa}>
      <Modal.Header>
        <div className="d-flex flex-row justify-content-between w-100">
          <h1>Nova etapa</h1>
          <Button className="m-2" onClick={modalAddEtapaClose}>
            X
          </Button>
        </div>
      </Modal.Header>
      <Modal.Body className="container">
        <FormsEtapa />
      </Modal.Body>
    </Modal>
  );
}

export default NovaEtapa;
