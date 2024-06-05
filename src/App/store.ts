import {
    Edge,
    EdgeChange,
    Node,
    NodeChange,
    OnNodesChange,
    OnEdgesChange,
    applyNodeChanges,
    applyEdgeChanges,
  } from 'reactflow';
  import { createWithEqualityFn } from "zustand/traditional";
  

  export type RFState = {
    nodes: Node[];
    edges: Edge[];
    onNodesChange: OnNodesChange;
    onEdgesChange: OnEdgesChange;
    addChildNode: (initialNodes: Array<any>, initiaEdges: Array<any>) => void;
    getNode: (id:string) => Node;
    setNode: (node: Node) => void;
    setEdge: (edge: Edge) => void;
    dispatchNodes: () => void;
  };
   
  const useStore = createWithEqualityFn<RFState>((set, get) => ({
    nodes: [
        {
            id: 'start',
            type: 'start',
            data: { label: 'Départ' },
            position: { x: 0, y: 0 },
        },
        { 
            id: 'end',
            type:'end',
            data: { label: 'Fin' },
            position: { x: 0, y: 0 }, 
        },
        
 
          { id: '1', type:'attente', position: { x: 200, y: 0 }, data: { label: '1' } },
          { id: '2', type:'attente', position: { x: 700, y: 0 }, data: { label: '2' } },

    ],
    edges: [
        // { id: 'estart-2', source: 'start',  type: 'ButtonEdge', target: '2' },
        // { id: 'estart-1', source: 'start',  type: 'ButtonEdge', target: '1' }
        
    ],
    onNodesChange: (changes: NodeChange[]) => {
      set({
        nodes: applyNodeChanges(changes, get().nodes),
      });
    },
    onEdgesChange: (changes: EdgeChange[]) => {
        console.log("Je dans le edge =change ");
        console.log(changes);
      set({
        edges: applyEdgeChanges(changes, get().edges),
      });
    },
    addChildNode: (initialNodes: Array<any>, initialEdges: Array<any>) => {
        set({
          nodes: [...get().nodes].concat(initialNodes),
          edges: [...get().edges].concat(initialEdges),
        });
    },
    getNode: (id: string) => {
        return get().nodes.find(x => x.id === id)
    },
    setNode: (node: Node) => {
        set({
            nodes: [...get().nodes, node],
        });
    },
    setEdge: (edge: Edge) => {
        set({
            edges: [...get().edges, edge],
        });
    }, 
    dispatchNodes: () => {
      console.log("Je suis dans le dispatch");
      var nodes = [...get().nodes];
      console.log(nodes);
      var startPositionX:number = 0;
      var marginX:number = 150;
      var startNode:Node;
      var endNode:Node;
      var lastElementPos:number;
      for(var i = 0; i < nodes.length; i++){
        console.log(nodes[i]);
        if(nodes[i].id == "start")
        {
          startNode = nodes[i];
          startPositionX += nodes[i].width + marginX;
          console.log(startPositionX);
        }
        else if(nodes[i].id == "end")
        {
          endNode = nodes[i];
        }
        else 
        {
          nodes[i].position = {x: startPositionX, y: 0}
          console.log("Set de la position : " + startPositionX + " Pour la ligne : " + nodes[i].data.label)
          startPositionX += nodes[i].width + marginX;
          console.log(startPositionX);
        }

      }
      console.log(startPositionX);

      startNode.position = {x: 0, y: 0}
      endNode.position = {x: startPositionX, y: 0}
      set({
        nodes: nodes,
      })
    } 
  }));
   
export default useStore;