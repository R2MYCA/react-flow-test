import { Handle, NodeProps, Position } from 'reactflow';
 
export type NodeData = {
  label: string;
};
 
function gestion({ id, data }: NodeProps<NodeData>) {
    return (
        <div className="item-test-wrap">
            <div className="item-test gestion" data-id="36084">
                <div className="item-test-header"><svg className="icon-item-test-header"></svg>
                    <h4> {data.label} </h4><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                        viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                        stroke-linejoin="round" className="feather feather-more-vertical js-edit-btn">
                        <circle cx="12" cy="12" r="1"></circle>
                        <circle cx="12" cy="5" r="1"></circle>
                        <circle cx="12" cy="19" r="1"></circle>
                    </svg>
                    <div className="dropdown-box dropdown-item-test-options hide"><a className="edit-btn"><svg
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
                            </svg><span className="option-label">Supprimer</span></a></div>
                </div>
                <div className="item-test-content"></div>
                <div className="item-test-footer">
                    <h4></h4>
                    <h4>ACTION BATCH GESTION</h4>
                </div>
            </div>
            <div className="item-test-btn-show-nested gestion showed"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                    viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                    stroke-linejoin="round" className="feather feather-layers icon-layers">
                    <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                    <polyline points="2 17 12 22 22 17"></polyline>
                    <polyline points="2 12 12 17 22 12"></polyline>
                </svg><span>1</span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                    className="feather feather-chevron-right chevron">
                    <polyline points="9 18 15 12 9 6"></polyline>
                </svg></div><svg className="svgLink" width="50" height="100" stroke="white" stroke-width="4">
                <line x1="0" y1="50" x2="50" y2="50"></line>
            </svg>


            <Handle type="target" position={Position.Left} />
            <Handle type="source" position={Position.Right} />
        </div>
    );


}
 
export default gestion;