import { Button } from "react-bootstrap";
import { useRecoilState } from "recoil";
import CadeiaEtapa from "../components/cadeia/etapa";
import { stepsDisponiveis, cadeia } from '../states/cadeia';

function PassoCadeia (props) {
  const [cadeiaState, setCadeiaState] = useRecoilState(cadeia);
  const [stepsState, setStepsState] = useRecoilState(stepsDisponiveis);

  function onClickHandler (i) {
    let index = prompt("Ordem do step a adicionar");
    if(/[^0-9]/g.test(index)){
      window.alert("Ordem digitada não existente");
      return;
    }
    let ordem = [...cadeiaState];
    ordem[i] = [...ordem[i], stepsState[index-1]];
    setCadeiaState(ordem);
  }

  return (
    <div className="d-flex justify-content-center align-items-center me-3">
      <div className="d-flex justify-content-center flex-column p-2 shadow border-light border rounded">
        {
          props.etapa.map((v, i) => {
            return <CadeiaEtapa ordem={v.ordem} nome={v.nome}/>
          })
        }
        <Button onClick={() => onClickHandler(props.index)} className="align-self-center opacity-75 mt-2 rounded-circle bg-primary font-weight-bold shadow" style={{width:40, height:40}}>+</Button>
      </div>
      {
        !props.last ?
        <h3 className="ms-3 fw-bold">{">>>"}</h3>:
        <Button className="ms-3 opacity-75 rounded-circle bg-primary font-weight-bold shadow" style={{width:40, height:40}}>+</Button>
      }
    </div>
  )
}

function Cadeias() {

  const [etapasState, setEtapasState] = useRecoilState(stepsDisponiveis);
  const [cadeiaState, setCadeiaState] = useRecoilState(cadeia);

  return (
    <div className="container mt-3 h-75">
      <div className="border rounded h-75 w-100 shadow mt-4 align-items-center d-flex p-5 overflow-auto">
        {
          cadeiaState.map((v, i) => {
            return <PassoCadeia index={i} last={i === (cadeiaState.length-1)} etapa={v}/>
          })
        }
        
      </div>
      <div className="border rounded h-25 w-100 shadow mt-4 align-items-center d-flex p-5 overflow-auto">
        <div className="d-flex justify-content-center">
        {
          etapasState.map(v => {
            return <CadeiaEtapa ordem={v.ordem} nome={v.nome}/>
          })
        }

        </div>
      </div>
    </div>
  );
}

export default Cadeias;
