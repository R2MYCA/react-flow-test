import { Handle, NodeProps, Position } from 'reactflow';
 
export type NodeData = {
  label: string;
};
 
function end({ id, data }: NodeProps<NodeData>) {
    return (
        <div className="rounded node-end">
            <Handle type="target" position={Position.Left} />
        </div>
    );
}
 
export default end;