import { Handle, NodeProps, Position } from 'reactflow';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStop } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
 
export type NodeData = {
  label: string;
};
 
function end({ id, data }: NodeProps<NodeData>) {
    const [isSelected, setIsSelected] = useState(false);
    const selected = () => setIsSelected(true);
    const noMoreSelected = () => setIsSelected(false);
    
    return (
        <div className="start-end-node-wrap end" onClick={selected} onBlur={noMoreSelected} tabIndex={0}>
            <div className="rounded node-start-end">
                <FontAwesomeIcon icon={faStop}></FontAwesomeIcon>
                <Handle type="target" position={Position.Left} />
            </div>
            <h3>{data.label}</h3>
            <div className={"node-wrap-selected " + (isSelected ? "": "hide")}></div>
        </div>
    );
}
 
export default end;