import { useTextoSlice } from "@car/storage";
import GenericEditorPanel from "../GenericEditorPanel";
import TextItem from "./TextItem";

const TextEdit = () => <GenericEditorPanel hook={useTextoSlice} renderer={TextItem} />;

export default TextEdit;
