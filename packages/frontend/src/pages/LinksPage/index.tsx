import { TextIds } from "@car/models/src/models/TextoModel";
import { useTextosSlice } from "@car/storage";
import SuspenseData from "../../components/SuspenseData";

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
