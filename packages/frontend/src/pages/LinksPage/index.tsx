import SuspenseData from "../../components/SuspenseData";
import { TextIds } from "../../models/TextoModel";
import { useTextosSlice } from "../../stores/slices/textos/useTextosSlice";

const Escola = () => {
	return <>em construção</>;
};

const LinksPage = () => {
	const data = [{ id: "oi" }];
	const error = null;
	const loading = false;

	const textData = useTextosSlice();
	return (
		<SuspenseData
			data={data}
			error={error}
			loading={loading}
			textData={textData}
			component={Escola}
			id={TextIds.ESCOLA}
			idGetter={(p) => `${p.id}`}
		/>
	);
};

export default LinksPage;
