import { useTextoSlice } from "@car/storage";
import GenericEditorPanel from "../GenericEditorPanel";
import TextItem from "./TextItem";

const TextEdit = () => {
	return <GenericEditorPanel hook={useTextoSlice} renderer={TextItem} />;
};

export default TextEdit;
