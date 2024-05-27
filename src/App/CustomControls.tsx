import { useZoomPanHelper } from "reactflow";

function CustomControls() {
  const { zoomIn, zoomOut, fitView } = useZoomPanHelper();

  return (
    <div>
      <button onClick={zoomIn}>Zoom In</button>
      <button onClick={zoomOut}>Zoom Out</button>
      <button onClick={fitView}>Fit View</button>
    </div>
  );
}

export default CustomControls;


https://codesandbox.io/p/sandbox/great-ardinghelli-k7vof?file=%2Fsrc%2FCustomControls.js%3A1%2C10-1%2C26