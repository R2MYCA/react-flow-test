import { Handle, NodeProps, Position } from 'reactflow';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

export type NodeData = {
  label: string;
};
 
function start({ id, data }: NodeProps<NodeData>) {
    const [isSelected, setIsSelected] = useState(false);
    const selected = () => setIsSelected(true);
    const noMoreSelected = () => setIsSelected(false);

    return (
        <div className="start-end-node-wrap start " onClick={selected} onBlur={noMoreSelected} tabIndex={0}>
            <h3>{data.label}</h3>
            <div className="rounded node-start-end">
                <FontAwesomeIcon icon={faPlay}></FontAwesomeIcon>
                <Handle type="source" position={Position.Right} />
            </div>
            <div className={"node-wrap-selected " + (isSelected ? "": "hide")}></div>
        </div>
    );
}
 
export default start;