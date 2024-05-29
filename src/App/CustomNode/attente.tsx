import { Handle, NodeProps, Position } from 'reactflow';
 
export type NodeData = {
  label: string;
};
var isSelected = false;
const onClick = () => {
    console.log("Je suis dans le select");
    isSelected = true;
  }
 
function attente({ id, data }: NodeProps<NodeData>) {
    return (
        <div className="item-test-wrap " onClick={onClick} >
            <div className={"item-test attente " + (isSelected ? "selected": "")}  data-id={id}>
                <div className="item-test-header">
                    {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                        fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                        className="feather feather-pause-circle icon-item-test-header">
                        <circle cx="12" cy="12" r="10"></circle>
                        <line x1="10" y1="15" x2="10" y2="9"></line>
                        <line x1="14" y1="15" x2="14" y2="9"></line>
                    </svg> */}
                    <h4>
                    {data.label}
                    </h4>
                    {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                        viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                        stroke-linejoin="round" className="feather feather-more-vertical js-edit-btn">
                        <circle cx="12" cy="12" r="1"></circle>
                        <circle cx="12" cy="5" r="1"></circle>
                        <circle cx="12" cy="19" r="1"></circle>
                    </svg> */}
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
    );


}
 
export default attente;