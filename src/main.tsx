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

// const element = document.getElementById( 'root' );
// var r = { 
//   nodes:  [ 
//     { id: '1', position: { x: 0, y: 0 }, data: { label: '1' } },
//     { id: '2', position: { x: 0, y: 100 }, data: { label: '2' } },
//   ], 
//   edges: [
//     { id: 'e1-2', source: '1', target: '2' }
//   ],
// };
// const schemaEditor =  SchemaNodeEditor.create( element , r );
  





  // [ 
  //   { id: '1', position: { x: 0, y: 0 }, data: { label: '1' } },
  //   { id: '2', position: { x: 0, y: 100 }, data: { label: '2' } },
  // ];
// var r =  [] = [
//   {
//       id: 'root',
//       type: 'mindmap',
//       data: { label: 'React Flow Mind Map' },
//       position: { x: 0, y: 0 },
//       dragHandle: '.dragHandle',
//       test:"",
//     },
//     // { 
//     //   id: '1', 
//     //   type: 'mindmap',
//     //   data: { label: 'Node 1' },
//     //   position: { x: 100, y: 100 },
//     //   dragHandle: '.dragHandle',
//     // },
//     // { 
//     //   id: '2',
//     //   type: 'mindmap',
//     //   data: { label: 'Node 2' },
//     //   position: { x: 100, y: 200 } 
//     // },
//   ];
// if(element !=  null){
// }
//   ,{
//     customValue: {saveFunction: testFunction}
// }
// );