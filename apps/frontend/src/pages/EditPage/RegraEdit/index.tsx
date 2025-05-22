import { useRegraSlice } from "@car/storage";
import GenericEditorPanel from "../GenericEditorPanel";
import RegraItem from "./RegraItem";

const RegraEdit = () => {
	return <GenericEditorPanel renderer={RegraItem} hook={useRegraSlice} />;
};

export default RegraEdit;
