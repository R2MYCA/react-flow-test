import React from 'react';

function EditNodeData({isShowed, data}){
  if(!isShowed && data == null) return null
  
  return (
    <div className="side-edit-bar side-edit-bar--open">
        <div className="updatenode__controls">
            <label>label:</label>
            <input type="text" value={data.data.label} readOnly/>

    {/* 
            <div className="updatenode__checkboxwrapper">
                <label>hidden:</label>
                <input
                type="checkbox"
                checked={nodeHidden}
                onChange={(evt) => setNodeHidden(evt.target.checked)}
                />
            </div> */}
        </div>
    </div>
  );
};
export default EditNodeData


//https://github.com/amolkapadi/React-flow-edit-node-youtube/blob/main/src/DragDrop/DnDFlow.js#L52