import React from 'react';
import ReactDOM from 'react-dom/client';
import { ReactFlowProvider } from 'reactflow';

import App from './App';

// all styles for this example app are in the index.css file to keep it as simple as possible
import './index.css';

type dataNode = {
  nodes: Array<any>,
  edges: Array<any>
}

export default class SchemaNodeEditor {
  public static create(sourceElement: Element | null, data: dataNode ){
    return ReactDOM.createRoot(sourceElement as HTMLElement).render(
      <React.StrictMode>
        <ReactFlowProvider>
          <App 
            initialNodes={data.nodes}
            initialEdges={data.edges}
          />
        </ReactFlowProvider>
      </React.StrictMode>
    );
  }
}
declare global {
  interface Window { SchemaNodeEditor: any; }
}

window.SchemaNodeEditor = SchemaNodeEditor || {};

//Mettre en commentaire cette partie pour ne pas executer celle-ci dans le fichier build(le fichier d'export de la library);

const element = document.getElementById( 'root' );
var r = { 
  nodes:  [ 
    { id: 'start', type:'start', position: { x: 0, y: 0 }, data: { label: 'Start' } },
    { id: '1', type:'attente', position: { x: 200, y: 0 }, data: { label: '1' } },
    { id: '2', type:'attente', position: { x: 700, y: 0 }, data: { label: '2' } },
    { id: 'end', type:'end', position: { x: 1000, y: 0 }, data: { label: 'End' } },
  ], 
  edges: [
    { id: 'e1-2', source: '1',  type: 'ButtonEdge', target: '2' }
  ],
};
const schemaEditor =  SchemaNodeEditor.create( element , r );