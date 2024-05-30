import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes, faBars, faShuffle } from '@fortawesome/free-solid-svg-icons';
import { faPauseCircle, faPaperPlane, faUser, faEnvelopeOpen} from '@fortawesome/free-regular-svg-icons';



function DragAndDropNodeAdd(){
  const onDragStart = (event, nodeType) => {
    event.dataTransfer.setData('application/reactflow', nodeType);
    event.dataTransfer.effectAllowed = 'move';
  };
  const [isOpen, setIsOpen] = useState(false);

  const handleTrigger = () => setIsOpen(!isOpen);

  return (
    <div className={`sidebar ${isOpen ? "sidebar--open" : ""}`}>
      <div className="trigger" onClick={handleTrigger}>
        <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
      </div>
      {/* <div className="description">Vous pouvez glisser déposer les éléments pour les créer.</div> */}
      <div className="sidebar-element" onDragStart={(event) => onDragStart(event, 'gestion')} draggable>
        <FontAwesomeIcon icon={faPauseCircle} />
        <span>Action Batch Gestion</span>
      </div>
      <div className="sidebar-element" onDragStart={(event) => onDragStart(event, 'envoi')} draggable>
        <FontAwesomeIcon icon={faPaperPlane} />
        <span>Action Batch Envoi</span>
      </div>
      <div className="sidebar-element" onDragStart={(event) => onDragStart(event, 'scenario')} draggable>
        <FontAwesomeIcon icon={faPauseCircle} />
        <span>Action Scenario</span>
      </div>
      <div className="sidebar-element" onDragStart={(event) => onDragStart(event, 'attente')} draggable>
        <FontAwesomeIcon icon={faPauseCircle} />
        <span>Action Attente</span>
      </div>
      <div className="sidebar-element" onDragStart={(event) => onDragStart(event, 'mail')} draggable>
        <FontAwesomeIcon icon={faEnvelopeOpen} />
        <span>Mail Simple</span>
      </div>
      <div className="sidebar-element" onDragStart={(event) => onDragStart(event, 'retour')} draggable>
        <FontAwesomeIcon icon={faPauseCircle} />
        <span>Attente Retour</span>
      </div>
      <div className="sidebar-element" onDragStart={(event) => onDragStart(event, 'conditionnee')} draggable>
        <FontAwesomeIcon icon={faShuffle} />
        <span>Action Conditionnée</span>
      </div>
      <div className="sidebar-element" onDragStart={(event) => onDragStart(event, 'retourUser')} draggable>
        <FontAwesomeIcon icon={faUser} />
        <span>Attente Retour Utilisateur</span>
      </div>
    </div>
    // <aside>
    //   <div className="description">Vous pouvez glisser déposer les éléments pour les créer.</div>
    //   <div className="dndnode input" onDragStart={(event) => onDragStart(event, 'gestion')} draggable>
    //     Action Batch Gestion
    //   </div>
    //   <div className="dndnode input" onDragStart={(event) => onDragStart(event, 'envoi')} draggable>
    //     Action Batch Envoi
    //   </div>
    //   <div className="dndnode input" onDragStart={(event) => onDragStart(event, 'scenario')} draggable>
    //     Action Scenario
    //   </div>
    //   <div className="dndnode input" onDragStart={(event) => onDragStart(event, 'attente')} draggable>
    //     Action Attente
    //   </div>
    //   <div className="dndnode input" onDragStart={(event) => onDragStart(event, 'mail')} draggable>
    //     Mail Simple
    //   </div>
    //   <div className="dndnode input" onDragStart={(event) => onDragStart(event, 'retour')} draggable>
    //     Attente Retour
    //   </div>
    //   <div className="dndnode input" onDragStart={(event) => onDragStart(event, 'conditionnee')} draggable>
    //     Action Conditionnée
    //   </div>
    //   <div className="dndnode" onDragStart={(event) => onDragStart(event, 'retourUser')} draggable>
    //     Attente Retour Utilisateur
    //   </div>
    // </aside>
  );
};
export default DragAndDropNodeAdd


// https://reactflow.dev/examples/interaction/drag-and-drop