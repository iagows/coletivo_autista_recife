import ControlledAccordion, { type AccordionContent } from "../../components/ControlledAccordion";
import { lazyWithSuspense } from "../../navigation/LazySuspense";

const TextEditor = lazyWithSuspense(() => import("./TextEdit"));
const TextEditorTitle = "Textos do site";

const RegraEditor = lazyWithSuspense(() => import("./RegraEdit"));
const RegraEditorTitle = "Regras do grupo";

const ProfissionalEditor = lazyWithSuspense(() => import("./ProfEdit"));
const ProfissionalEditorTitle = "Profissionais";

const contents: AccordionContent[] = [
	{
		title: TextEditorTitle,
		editor: TextEditor,
	},
	{
		title: RegraEditorTitle,
		editor: RegraEditor,
	},
	{
		title: ProfissionalEditorTitle,
		editor: ProfissionalEditor,
	},
];

const EditPage = () => {
	return <ControlledAccordion contents={contents} />;
};

export default EditPage;
