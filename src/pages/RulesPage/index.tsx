import DataDisplay from "../../components/DataDisplay";
import LoadingSkeleton from "../../components/LoadingSkeleton";
import PrepareDisplay from "../../components/PrepareDisplay";
import { TextIds } from "../../models/TextoModel";
import { useRulesSlice } from "../../stores/slices/regras/useRulesSlice";
import { useTextosSlice } from "../../stores/slices/textos/useTextosSlice";
import RuleItem from "./RuleItem";

const RulesPage = () => {
	const textoData = useTextosSlice();
	const { data, error, loading } = useRulesSlice();

	return (
		<DataDisplay id={TextIds.REGRAS_DESC} data={textoData}>
			<PrepareDisplay
				error={error}
				isLoading={loading}
				loadingComponent={<LoadingSkeleton amount={4} h={118} />}
			>
				{data.map((r) => (
					<RuleItem rule={r} key={r.id} />
				))}
			</PrepareDisplay>
		</DataDisplay>
	);
};

export default RulesPage;
