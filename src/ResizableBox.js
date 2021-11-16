import { Rnd } from "react-rnd";
import { useState } from "react";
import useFieldsStore from "./useFieldsStore";
import { uuid } from "uuidv4";

const ResizableBox = ({ mouseClickPosition, setMouseClickPosition }) => {
  const addField = useFieldsStore((state) => state.addField);
  const [boxState, setBoxState] = useState({
    width: 50,
    height: 20,
    x: mouseClickPosition.x,
    y: mouseClickPosition.y,
  });
  const handleSave = () => {
    const label = prompt("Please enter Label", "");
    const type = prompt("Please enter type [text, text_input, checkbox]");

    addField({ ...boxState, label, type, uuid: uuid() });
    setMouseClickPosition(undefined);
  };

  return (
    <Rnd
      bounds={"parent"}
      size={{ width: boxState.width, height: boxState.height }}
      position={{ x: boxState.x, y: boxState.y }}
      style={{
        position: "absolute",
        background: "rgba(242, 38, 19, 0.4)",
      }}
      onDragStop={(e, d) => {
        setBoxState((prev) => ({ ...prev, x: d.x, y: d.y }));
      }}
      onResizeStop={(e, direction, ref, delta, position) => {
        setBoxState({
          width: ref.style.width,
          height: ref.style.height,
          ...position,
        });
      }}
    >
      <div style={{ position: "relative", width: "100%", height: "100%" }}>
        <button
          style={{
            position: "absolute",
            right: -45,
            top: -15,
            width: 40,
            height: 12,
            fontSize: 8,
          }}
          onClick={handleSave}
        >
          Save!
        </button>
      </div>
    </Rnd>
  );
};

export default ResizableBox;
