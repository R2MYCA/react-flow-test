import React, { useCallback, useState, useRef,  } from 'react';
import ReactFlow, { useNodesState, useEdgesState, addEdge, Connection, Edge, MiniMap, Background, ReactFlowProvider, Controls, NodeChange, useReactFlow, OnInit, useStoreApi } from 'reactflow';
 
//import de gestion des données
import { shallow } from 'zustand/shallow';

import 'reactflow/dist/style.css';
import { start, end, gestion, envoi, scenario, attente, mail, retour, conditionnee, retourUser } from './CustomNode';
import ButtonEdge from './CustomEdges/ButtonEdge';

import useStore, { RFState } from './store';
// import CustomControls, { focusNode } from './CustomControls';
import SideBar from './DragAndDrop/DragAndDropNodeAdd';
import EditNodeData from './EditNodeParam/EditNodeParam';
import CustomControls from './CustomControls';

const nodeTypes = { start, end, attente, gestion, envoi, scenario, mail, retour, conditionnee, retourUser };
const edgeTypes = {ButtonEdge}

//Declaration des données et des fonctions de la class store dans la page "./store.ts"
const selector = (state: RFState) => ({
  nodes: state.nodes,
  edges: state.edges,
  onNodesChange: state.onNodesChange,
  onEdgesChange: state.onEdgesChange,
  addChildNode: state.addChildNode,
  getNode: state.getNode,
  setNode: state.setNode,
  setEdge: state.setEdge,
});

//Déclaration des Nodes par default
const defaultNode = [
  { id: 'start', type:'start', position: { x: 0, y: 0 }, data: { label: 'Start' }, },
  { id: 'end', type:'end', position: { x: 1000, y: 0 }, data: { label: 'End' } },
];

let id = 0;
const getId = () => `dndnode_${id++}`;

// Vérification si je peux supprimer ou non un node en fonction de son type
//(ici le type start et end ne peut etre supprimer)
function shouldNodeBeRemoved(node) {
  if (node.type != 'start' && node.type != 'end') {
    return true;
  }
  return false;
}

export default function App({initialNodes, initialEdges}:any) {
  const reactFlowWrapper = useRef(null);
  const { nodes, edges, onNodesChange, onEdgesChange, addChildNode, getNode, setNode, setEdge } = useStore(
    selector,
    shallow,
  );
  const [reactFlowInstance, setReactFlowInstance] = useState();
  // const {setCenter } = useReactFlow();
  const { zoomIn, zoomOut, fitView, setCenter } = useReactFlow();
 
  //Function quand je connect 2 edges (que je crée un edge)
  const onConnect = useCallback(
    (params: Edge | Connection) => {
      var edge: Edge = { 
        id: 'e' + params.source + '-' + params.target,
        source: params.source,
        type: 'ButtonEdge',
        target: params.target,
      }
      setEdge(edge)
    },
    [reactFlowInstance],
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

      const position = {
        x: event.clientX,
        y: event.clientY,
      };
      const newNode = {
        id: getId(),
        type,
        position,
        data: { label: `${type} node` },
      };

      setNode(newNode);

      //ToDo:: Mettre en place l'appel de base pour ajouter ce scenario action
    },
    [reactFlowInstance],
  );

  // const onNodeClick = useCallback()  

  //Essai de focus quand double click sur un node
  const onNodeDoubleClick = (event, data) => {
    const node = data;
    
      // focusNode(node);
      const x = node.position.x + node.width / 2;
      const y = node.position.y + node.height / 2;
      const zoom = 1.85;
      console.log(x);
      console.log(y)

      setCenter(x, y, { zoom, duration: 1000 });
  }
    

  const onInit: OnInit = () => {
    //Ajoute les nodes importer par la librairie
    addChildNode(initialNodes, initialEdges);
    //fit de la vue pour avoir une vision globale de la board
    fitView();
  };

  // Permet de récupére les événement pour gérer les actions
  function handleNodesChange(changes: NodeChange[]) {
    const nextChanges = changes.reduce((acc, change) => {
    // Si je suis en mode suppression
    if (change.type === 'remove') {
      var node = getNode(change.id);
      //ToDo:: Afficher une alert avant de supprimer
      
      // Je verifie si je dois le supprimer
      if (shouldNodeBeRemoved(node)) {
        return [...acc, change];
      }

      return acc;
    }

    return [...acc, change];
  }, [] as NodeChange[])

  // apply the changes we kept
  onNodesChange(nextChanges);
}


 //importe les types de nodes disponible 
  return (
    <div className="dndflow">
        <SideBar />
        <div className="reactflow-wrapper" ref={reactFlowWrapper}>
          <ReactFlow
            nodes={nodes}
            edges={edges}
            onNodesChange={handleNodesChange}
            onEdgesChange={onEdgesChange}
            // onConnect={onConnect}
            nodeTypes={nodeTypes}
            edgeTypes={edgeTypes}
            snapToGrid={true}
            onInit={onInit}
            // onEdgeClick={test}
            onDrop={onDrop}
            onDragOver={onDragOver}
            onConnect={onConnect}
            // onNodeClick={onNodeClick}
            // onConnectStart={onConnectStart}
            // onConnectEnd={onConnectEnd}
            onNodeDoubleClick={onNodeDoubleClick}
          >
            <MiniMap zoomable pannable />
            <Background />
            <CustomControls />
            <Controls></Controls>
            {/* Pour affiche la barre de drag and drop */}
          </ReactFlow>
        </div>
        <EditNodeData/>
    </div>
  );
}