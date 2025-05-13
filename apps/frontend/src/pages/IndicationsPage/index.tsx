import { useProfissionalSlice, useTextoSlice } from "@car/storage";
import SuspenseData from "../../components/SuspenseData";
import IndicationItem from "./IndicationItem";

const IndicationsPage = () => {
	const { data, error, loading } = useProfissionalSlice();
	const textData = useTextoSlice();

	return (
		<SuspenseData
			data={[]}
			// error={null}
			loading={loading}
			textData={textData}
			component={IndicationItem}
			// id={TextIds.INDICACOES_DESC}
			idGetter={(p) => `${p.profissional.id}`}
		/>
	);
};

export default IndicationsPage;
