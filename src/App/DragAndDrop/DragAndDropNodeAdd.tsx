import React from 'react';

function DragAndDropNodeAdd(){
  const onDragStart = (event, nodeType) => {
    event.dataTransfer.setData('application/reactflow', nodeType);
    event.dataTransfer.effectAllowed = 'move';
  };

  return (
    <aside>
      <div className="description">Vous pouvez glisser déposer les éléments pour les créer.</div>
      <div className="dndnode input" onDragStart={(event) => onDragStart(event, 'gestion')} draggable>
        Action Batch Gestion
      </div>
      <div className="dndnode input" onDragStart={(event) => onDragStart(event, 'envoi')} draggable>
        Action Batch Envoi
      </div>
      <div className="dndnode input" onDragStart={(event) => onDragStart(event, 'scenario')} draggable>
        Action Scenario
      </div>
      <div className="dndnode input" onDragStart={(event) => onDragStart(event, 'attente')} draggable>
        Action Attente
      </div>
      <div className="dndnode input" onDragStart={(event) => onDragStart(event, 'mail')} draggable>
        Mail Simple
      </div>
      <div className="dndnode input" onDragStart={(event) => onDragStart(event, 'retour')} draggable>
        Attente Retour
      </div>
      <div className="dndnode input" onDragStart={(event) => onDragStart(event, 'conditionnee')} draggable>
        Action Conditionnée
      </div>
      <div className="dndnode" onDragStart={(event) => onDragStart(event, 'retourUser')} draggable>
        Attente Retour Utilisateur
      </div>
    </aside>
  );
};
export default DragAndDropNodeAdd


// https://reactflow.dev/examples/interaction/drag-and-drop