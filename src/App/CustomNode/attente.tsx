import { Handle, NodeProps, Position, useReactFlow } from 'reactflow';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPauseCircle} from '@fortawesome/free-regular-svg-icons';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons'; 
import { useState } from 'react';
 
export type NodeData = {
  label: string;
};


function Attente({ id, data, selected, }: NodeProps<NodeData>) {
    const [isSelected, setIsSelected] = useState(false);
    const { setNodes } = useReactFlow();
    const tselected = () => console.log(selected);
    const noMoreSelected = () => setIsSelected(false);
    
    const onDeleteNodeClick = () => {
        console.log("je suis la");
        setNodes((nodes) => nodes.filter((node) => node.id !== id));
    };

    return (
        <div onClick={tselected} onBlur={noMoreSelected} tabIndex={0}>
            
            <div className="item-test-wrap "  >
                <div className={"item-test attente " + (selected ? "selected": "")}  data-id={id}>
                    <div className="item-test-header">
                        <FontAwesomeIcon icon={faPauseCircle}></FontAwesomeIcon>
                        <h4>
                            {data.label}
                        </h4>
                        <FontAwesomeIcon icon={faEllipsisV}></FontAwesomeIcon>
                        {/* <div className="dropdown-box dropdown-item-test-options hide"><a class="edit-btn"><svg
                                    xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                    className="feather feather-edit-2">
                                    <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>
                                </svg><span className="option-label">Éditer</span></a><a className="del-btn"><svg
                                    xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                    className="feather feather-trash-2">
                                    <polyline points="3 6 5 6 21 6"></polyline>
                                    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                                    <line x1="10" y1="11" x2="10" y2="17"></line>
                                    <line x1="14" y1="11" x2="14" y2="17"></line>
                                </svg><span className="option-label">Supprimer</span></a></div> */}
                    </div>
                    <div className="item-test-content"></div>
                    <div className="item-test-footer">
                        <h4>ACTION ATTENTE</h4>
                    </div>
                </div>
                <Handle type="target" position={Position.Left} />
                <Handle type="source" position={Position.Right} />
            </div>
            <button className={"node-button-delete " + (selected ? "": "hide")}  onClick={onDeleteNodeClick}>
                ×
            </button>
            <div className={"node-wrap-selected " + (selected ? "": "hide")}></div>
        </div>
    );


}
 
export default Attente;
