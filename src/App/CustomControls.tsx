import { useReactFlow } from "reactflow";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExpand, faPlus, faMinus, faLockOpen, faLock } from '@fortawesome/free-solid-svg-icons';

function CustomControls({disabled, setDisabled}) {
  const { zoomIn, zoomOut, fitView,  } = useReactFlow();

  const zoom = () => {
    zoomIn();
  };
  const dezoom = () => {
    zoomOut();
  };
  const fit = () => {
    fitView();
  };
  const lock = () => {
    setDisabled(!disabled);
  };

  return (
    <div className="minimap-options">
      <div className="minimap-options-item" onClick={fit}>
        <FontAwesomeIcon icon={faExpand}></FontAwesomeIcon>
      </div>
      <div className="minimap-options-item" onClick={lock}>
        <FontAwesomeIcon icon={disabled ? faLock : faLockOpen}></FontAwesomeIcon>
      </div>
      <div className="minimap-options-item" onClick={dezoom}>
        <FontAwesomeIcon icon={faMinus}></FontAwesomeIcon>
      </div>
      <div className="minimap-options-item" onClick={zoom}>
        <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
      </div>
    </div>
  );
}

export default CustomControls;