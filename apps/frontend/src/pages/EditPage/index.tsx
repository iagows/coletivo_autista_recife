import ControlledAccordion, {
	type AccordionContent,
} from "../../components/ControlledAccordion";
import { lazyWithSuspense } from "../../navigation/LazySuspense";

const TextEditor = lazyWithSuspense(() => import("./TextEdit"));

const TextEditorTitle = "Editar textos do site";

const contents: AccordionContent[] = [
	{
		title: TextEditorTitle,
		editor: TextEditor,
	},
];

const EditPage = () => {
	return <ControlledAccordion contents={contents} />;
};

export default EditPage;
