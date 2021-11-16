import { useState } from "react";
import { useDragLayer } from "react-dnd";

const ResizableBox = ({ mouseClickPosition }) => {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  return (
    <div
      style={{
        width,
        height,
        border: "solid red 1px",
        position: "absolute",
        top: mouseClickPosition.y,
        left: mouseClickPosition.x,
      }}
    />
  );
};

export default ResizableBox;
