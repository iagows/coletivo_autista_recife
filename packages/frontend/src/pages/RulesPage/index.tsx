import { TextIds } from "@car/models/src/models/TextoModel";
import { useRulesSlice, useTextosSlice } from "@car/storage";
import SuspenseData from "../../components/SuspenseData";
import RuleItem from "./RuleItem";

const RulesPage = () => {
	const textoData = useTextosSlice();
	const { data, error, loading } = useRulesSlice();

	return (
		<SuspenseData
			data={data}
			error={error}
			loading={loading}
			textData={textoData}
			component={RuleItem}
			id={TextIds.REGRAS_DESC}
			idGetter={(r) => `${r.id}`}
		/>
	);
};

export default RulesPage;
