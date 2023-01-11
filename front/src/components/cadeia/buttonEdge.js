import { Button } from "react-bootstrap";
import React from "react";
import { getBezierPath } from "reactflow";
import { useRecoilState } from "recoil";
import { edgesAtom } from "../../states/cadeia";

import "./index.css";

const foreignObjectSize = 40;

export default function CustomEdge({
  id,
  sourceX,
  sourceY,
  targetX,
  targetY,
  sourcePosition,
  targetPosition,
  style = {},
  markerEnd,
}) {
  const [edges, setEdges] = useRecoilState(edgesAtom);

  const [edgePath, _labelX, _labelY] = getBezierPath({
    sourceX,
    sourceY,
    sourcePosition,
    targetX,
    targetY,
    targetPosition,
  });

  function RemoveEdge(evt, id) {
    evt.stopPropagation();
    let newEdges = [...edges];

    newEdges = newEdges.filter((v) => {
      return v.id !== id;
    });

    setEdges(newEdges);
  }

  return (
    <>
      <path
        id={id}
        style={style}
        className="react-flow__edge-path"
        d={edgePath}
        markerEnd={markerEnd}
      />
      <foreignObject
        width={foreignObjectSize}
        height={foreignObjectSize}
        x={targetX - (targetX - sourceX + foreignObjectSize) / 2}
        y={targetY - (targetY - sourceY + foreignObjectSize) / 2}
        className="edgebutton-foreignobject"
        requiredExtensions="http://www.w3.org/1999/xhtml"
      >
        <div>
          <Button
            variant={"danger"}
            size="sm"
            className="rounded btn-remove"
            onClick={(event) => RemoveEdge(event, id)}
          >
            X
          </Button>
        </div>
      </foreignObject>
    </>
  );
}
