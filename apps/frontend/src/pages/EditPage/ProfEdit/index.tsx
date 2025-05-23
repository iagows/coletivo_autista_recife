import { useProfissionalSlice } from "@car/storage";
import GenericEditorPanel from "../GenericEditorPanel";
import ProfItem from "./ProfItem";

const ProfEdit = () => <GenericEditorPanel renderer={ProfItem} hook={useProfissionalSlice} />;
export default ProfEdit;
