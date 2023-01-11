import { useCallback, useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { stepsAtom, cadeiaAtom, nodesAtom, edgesAtom } from "../states/cadeia";
import ReactFlow, {
  Background,
  Controls,
  applyEdgeChanges,
  applyNodeChanges,
  addEdge,
  useOnViewportChange,
} from "reactflow";
import CadeiaEtapa from "../components/cadeia/etapa";
import ButtonEdge from "../components/cadeia/buttonEdge";
import NavbarComponent from "../components/Navbar";

import "reactflow/dist/style.css";

const edgeTypes = {
  buttonedge: ButtonEdge,
};

function Cadeias() {
  const [etapasState, setEtapasState] = useRecoilState(stepsAtom);
  const [cadeiaState, setCadeiaState] = useRecoilState(cadeiaAtom);

  const [nodes, setNodes] = useRecoilState(nodesAtom);
  const [edges, setEdges] = useRecoilState(edgesAtom);

  const [view, setView] = useState({ x: 0, y: 0, zoom: 1 });

  const onNodesChange = useCallback((changes) => {
    return setNodes((nds) => applyNodeChanges(changes, nds));
  }, []);
  const onEdgesChange = useCallback((changes) => {
    return setEdges((eds) => applyEdgeChanges(changes, eds));
  }, []);

  const onConnect = useCallback((params) => {
    params["style"] = { stroke: "green", strokeWidth: 2 };
    params["type"] = "buttonedge";
    return setEdges((eds) => addEdge(params, eds));
  }, []);

  useEffect(() => {
    const starting_point = {
      x: 50,
      y: Math.round(document.getElementById("flow").offsetHeight / 2),
    };

    let nds = [];
    let edg = [];

    nds = etapasState.map((v, i) => {
      return {
        id: v.ordem.toString(),
        targetPosition: "left",
        sourcePosition: "right",
        data: {
          label: v.nome.toString(),
        },
        position: { x: starting_point.x + 250 * i, y: starting_point.y },
      };
    });

    edg = etapasState
      .map((v, i) => {
        if (i > 0) {
          return {
            id: etapasState[i - 1].ordem + "-" + v.ordem,
            source: etapasState[i - 1].ordem.toString(),
            target: v.ordem.toString(),
            type: "buttonedge",
            style: {
              stroke: "green",
              strokeWidth: 2,
            },
          };
        }
      })
      .filter((v) => !!v);

    setNodes(nds);
    setEdges(edg);
  }, []);

  useOnViewportChange({
    onChange: useCallback(
      (viewport) =>
        setView({ x: viewport.x, y: viewport.y, zoom: viewport.zoom }),
      []
    ),
  });

  function AddNode(node) {
    const stepIndex = nodes.filter((v) => v.data.label === node.nome).length;
    setNodes((nds) =>
      nds.concat({
        id: node.ordem + "_" + stepIndex,
        data: {
          label: node.nome.toString(),
        },
        sourcePosition: "right",
        targetPosition: "left",
        position: {
          x:
            (view.x * -1) / view.zoom +
            (document.getElementById("flow").offsetWidth / 2 / view.zoom - 75),
          y:
            (view.y * -1) / view.zoom +
            document.getElementById("flow").offsetHeight / 3 / view.zoom,
        },
      })
    );
  }

  return (
    <div className="container mt-3 h-75">
      <div
        id="flow"
        className="border rounded h-75 w-100 shadow mt-4 align-items-center d-flex p-1 overflow-auto"
      >
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          edgeTypes={edgeTypes}
        >
          <Background />
          <Controls />
        </ReactFlow>
      </div>
      <div className="border rounded h-25 w-100 shadow mt-4 align-items-center d-flex p-5 overflow-auto">
        <div className="d-flex justify-content-center">
          {etapasState.map((v) => {
            return (
              <CadeiaEtapa ordem={v.ordem} nome={v.nome} addHandler={AddNode} />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Cadeias;
