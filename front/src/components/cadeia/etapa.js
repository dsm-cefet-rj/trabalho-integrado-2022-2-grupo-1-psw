import { cadeia } from "../../states/cadeia";
import { useRecoilState } from "recoil";

function CadeiaEtapa(props) {
  return (
    <div
      onClick={() => props.addHandler({ ordem: props.ordem, nome: props.nome })}
      style={{ height: 60, width: 200, cursor: "pointer" }}
      className="etapa mt-auto ms-2 me-2 pe-3 border border-dark rounded shadow d-flex flex-row justify-content-between m-1"
    >
      <div
        className="bg-success text-light border rounded-circle m-auto d-flex border-dark"
        style={{ height: 40, width: 40 }}
      >
        <h6 className="m-auto fw-bold">+</h6>
      </div>
      <h6 className="m-auto">{props.nome}</h6>
    </div>
  );
}

export default CadeiaEtapa;
