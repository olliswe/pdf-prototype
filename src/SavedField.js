import useFieldsStore from "./useFieldsStore";

const SavedField = ({ field }) => {
  const removeField = useFieldsStore((state) => state.removeField);

  return (
    <div
      style={{
        top: field.y,
        left: field.x,
        width: field.width,
        height: field.height,
        position: "absolute",
        background: "rgba(72, 113, 247, 0.4)",
      }}
    >
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <span style={{ fontSize: 9 }}>
          {field.label} || {field.type}
        </span>
        <button
          style={{
            position: "absolute",
            right: -20,
            top: -10,
            width: 20,
            height: 12,
            fontSize: 8,
          }}
          onClick={() => removeField(field.uuid)}
        >
          X
        </button>
      </div>
    </div>
  );
};

export default SavedField;
