import "./App.css";
import useLoadCanvasAndImage from "./useLoadCanvasAndImage";
import { useState } from "react";
import ResizableBox from "./ResizableBox";
import { useDrop } from "react-dnd";

function App() {
  const { canvasDimension, canvasRef } = useLoadCanvasAndImage();
  const [mouseClickPosition, setMouseClickPosition] = useState();

  const handleCanvasClick = (evt) => {
    const rect = canvasRef.current.getBoundingClientRect();
    setMouseClickPosition({
      x: evt.clientX - rect.left, // scale mouse coordinates after they have
      y: evt.clientY - rect.top, // been adjusted to be relative to element
    });
  };

  const [, drop] = useDrop(
    () => ({
      accept: "box",
      drop(item, monitor) {
        const delta = monitor.getDifferenceFromInitialOffset();
        console.log(delta);
        return undefined;
      },
    }),
    []
  );

  return (
    <div
      style={{
        margin: "20px 20px",
        position: "relative",
        border: "solid red 10px",
      }}
      ref={drop}
    >
      {mouseClickPosition && (
        <ResizableBox mouseClickPosition={mouseClickPosition} />
      )}
      <canvas
        height={canvasDimension.height}
        width={canvasDimension.width}
        ref={canvasRef}
        onMouseDown={handleCanvasClick}
        style={{ border: "solid 1px black" }}
      />
    </div>
  );
}

export default App;
