import SuspenseData from "../../components/SuspenseData";
import { TextIds } from "../../models/TextoModel";
import { useRulesSlice } from "../../stores/slices/regras/useRulesSlice";
import { useTextosSlice } from "../../stores/slices/textos/useTextosSlice";
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
