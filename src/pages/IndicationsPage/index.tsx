import SuspenseData from "../../components/SuspenseData";
import { TextIds } from "../../models/TextoModel";
import { useProfissionalSlice } from "../../stores/slices/profissional/useProfissionalSlice";
import { useTextosSlice } from "../../stores/slices/textos/useTextosSlice";
import IndicationItem from "./IndicationItem";

const IndicationsPage = () => {
	const { data, error, loading } = useProfissionalSlice();
	const textData = useTextosSlice();

	return (
		<SuspenseData
			data={data}
			error={error}
			loading={loading}
			textData={textData}
			component={IndicationItem}
			id={TextIds.INDICACOES_DESC}
			idGetter={(p) => `${p.profissional.id}`}
		/>
	);
};

export default IndicationsPage;
