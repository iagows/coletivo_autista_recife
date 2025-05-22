import ControlledAccordion, { type AccordionContent } from "../../components/ControlledAccordion";
import { lazyWithSuspense } from "../../navigation/LazySuspense";

const TextEditor = lazyWithSuspense(() => import("./TextEdit"));
const TextEditorTitle = "Textos do site";

const RegraEditor = lazyWithSuspense(() => import("./RegraEdit"));
const RegraEditorTitle = "Regras do grupo";

const contents: AccordionContent[] = [
	{
		title: TextEditorTitle,
		editor: TextEditor,
	},
	{
		title: RegraEditorTitle,
		editor: RegraEditor,
	},
];

const EditPage = () => {
	return <ControlledAccordion contents={contents} />;
};

export default EditPage;
