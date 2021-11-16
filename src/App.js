import "./App.css";
import useLoadCanvasAndImage from "./useLoadCanvasAndImage";
import { useState } from "react";
import ResizableBox from "./ResizableBox";
import useFieldsStore from "./useFieldsStore";
import SavedField from "./SavedField";
import ReactJson from "react-json-view";

function App() {
  const { canvasDimension, canvasRef } = useLoadCanvasAndImage();
  const [mouseClickPosition, setMouseClickPosition] = useState();
  const fields = useFieldsStore((state) => state.fields);

  const handleCanvasClick = (evt) => {
    const rect = canvasRef.current.getBoundingClientRect();
    setMouseClickPosition({
      x: evt.clientX - rect.left, // scale mouse coordinates after they have
      y: evt.clientY - rect.top, // been adjusted to be relative to element
    });
  };

  return (
    <div style={{ display: "flex", padding: "20px 20px" }}>
      <div
        style={{
          position: "relative",
          height: canvasDimension.height,
          width: canvasDimension.width,
        }}
      >
        {mouseClickPosition && (
          <ResizableBox
            key={mouseClickPosition.x}
            mouseClickPosition={mouseClickPosition}
            setMouseClickPosition={setMouseClickPosition}
          />
        )}
        {fields.map((field) => (
          <SavedField key={field.uuid} field={field} />
        ))}
        <canvas
          height={canvasDimension.height}
          width={canvasDimension.width}
          ref={canvasRef}
          onMouseDown={handleCanvasClick}
        />
      </div>
      <ReactJson src={fields} />
    </div>
  );
}

export default App;
