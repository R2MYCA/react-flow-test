import React, { useCallback, useMemo, useState, useRef } from 'react';
import ReactFlow, { useNodesState, useEdgesState, addEdge, Connection, Edge, MiniMap, Background, ReactFlowProvider, Controls } from 'reactflow';
 
import 'reactflow/dist/style.css';
import { start, end, gestion, envoi, scenario, attente, mail, retour, conditionnee, retourUser } from './CustomNode';
import ButtonEdge from './CustomEdges/ButtonEdge';

import CustomControls from './CustomControls';
import SideBar from './dragAndDrop/SideBar';

const nodeTypes = { start, end, attente, gestion, envoi, scenario, mail, retour, conditionnee, retourUser };
const edgeTypes = {ButtonEdge}
let id = 0;
const getId = () => `dndnode_${id++}`;

export default function App({initialNodes, initialEdges}:any) {
  const reactFlowWrapper = useRef(null);
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [reactFlowInstance, setReactFlowInstance] = useState(null);
 
  const onConnect = useCallback(
    (params: Edge | Connection) => setEdges((eds) => addEdge(params, eds)),
    [setEdges],
  );
  //fonction pour le drag and drop
  const onDragOver = useCallback((event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
  }, []);

  const onDrop = useCallback(
    (event) => {
      event.preventDefault();

      const type = event.dataTransfer.getData('application/reactflow');

      // check if the dropped element is valid
      if (typeof type === 'undefined' || !type) {
        return;
      }

      // reactFlowInstance.project was renamed to reactFlowInstance.screenToFlowPosition
      // and you don't need to subtract the reactFlowBounds.left/top anymore
      // details: https://reactflow.dev/whats-new/2023-11-10
      const position = reactFlowInstance.screenToFlowPosition({
        x: event.clientX,
        y: event.clientY,
      });
      const newNode = {
        id: getId(),
        type,
        position,
        data: { label: `${type} node` },
      };

      setNodes((nds) => nds.concat(newNode));
    },
    [reactFlowInstance],
  );
  
 //importe les types de nodes disponible 
  return (
    <div className="dndflow">
      <ReactFlowProvider>
        <div className="reactflow-wrapper" ref={reactFlowWrapper}>
          <ReactFlow
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            nodeTypes={nodeTypes}
            edgeTypes={edgeTypes}
            snapToGrid={true}
            // onEdgeClick={test}
            onDrop={onDrop}
            onDragOver={onDragOver}

          >
            <MiniMap zoomable pannable />
            <Background />
            <CustomControls />
            <Controls></Controls>
            {/* Pour affiche la barre de drag and drop */}
            <SideBar />
          </ReactFlow>
        </div>
      </ReactFlowProvider>
    </div>
  );
}

// function test(event, edge){
//   console.log(event);
//   console.log(edge);
  
//   edge.type = "smoothstep";
//   console.log("Je suis")
// }