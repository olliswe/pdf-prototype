import create from "zustand";

const useFieldsStore = create((set) => ({
  fields: [],
  addField: (field) => set(({ fields }) => ({ fields: [...fields, field] })),
  removeField: (uuid) =>
    set(({ fields }) => ({ fields: fields.filter((x) => x.uuid !== uuid) })),
}));

export default useFieldsStore;
