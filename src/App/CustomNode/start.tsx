import { Handle, NodeProps, Position } from 'reactflow';
 
export type NodeData = {
  label: string;
};
 
function start({ id, data }: NodeProps<NodeData>) {
    return (
        <div className="rounded node-start">
            {data.label}
            <Handle type="source" position={Position.Right} />
        </div>
    );
}
 
export default start;