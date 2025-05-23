import { useRegraSlice } from "@car/storage";
import GenericEditorPanel from "../GenericEditorPanel";
import RegraItem from "./RegraItem";

const RegraEdit = () => <GenericEditorPanel renderer={RegraItem} hook={useRegraSlice} />;

export default RegraEdit;
