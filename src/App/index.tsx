import React, { useCallback, useMemo } from 'react';
import ReactFlow, { useNodesState, useEdgesState, addEdge, Connection, Edge } from 'reactflow';
 
import 'reactflow/dist/style.css';
import { gestion, envoi, scenario, attente, mail, retour, conditionnee, retourUser } from './CustomNode';
import ButtonEdge from './CustomEdges/ButtonEdge';

import CustomControls from './CustomControls';

const nodeTypes = { attente, gestion, envoi, scenario, mail, retour, conditionnee, retourUser };
const edgeTypes = {ButtonEdge}

export default function App({initialNodes, initialEdges}:any) {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
 
  const onConnect = useCallback(
    (params: Edge | Connection) => setEdges((eds) => addEdge(params, eds)),
    [setEdges],
  );
  
 //importe les types de nodes disponible 
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        edgeTypes={edgeTypes}
        onEdgeClick={test}
      >
        <CustomControls />
      </ReactFlow>
    </div>
  );
}
function test(sdfs){
  console.log(sdfs)
  console.log("Je suis")
}