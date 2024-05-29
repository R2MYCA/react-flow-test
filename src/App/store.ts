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
   
  export type setNodes = (nodes: Node[]) => void;

  export type RFState = {
    nodes: Node[];
    edges: Edge[];
    onNodesChange: OnNodesChange;
    onEdgesChange: OnEdgesChange;
    addChildNode: (initialNodes: Array<any>, initiaEdges: Array<any>) => void;
    getNode: (id:string) => Node;
    setNode: (node: Node) => void;
    setEdge: (edge: Edge) => void;
  };
   
  const useStore = createWithEqualityFn<RFState>((set, get) => ({
    nodes: [
        {
            id: 'start',
            type: 'start',
            data: { label: 'Start' },
            position: { x: 0, y: 0 },
        },
        { 
            id: 'end',
            type:'end',
            data: { label: 'End' },
            position: { x: 1000, y: 0 }, 
        },
    ],
    edges: [],
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
    } 
  }));
   
  export default useStore;