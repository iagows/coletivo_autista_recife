import { useRegraSlice, useTextoSlice } from "@car/storage";
import SuspenseData from "../../components/SuspenseData";
import RuleItem from "./RuleItem";

const RulesPage = () => {
	const textoData = useTextoSlice();
	const { regras, isLoading, error } = useRegraSlice();

	return (
		<SuspenseData
			data={regras}
			// error={error}
			loading={isLoading}
			textData={textoData}
			component={RuleItem}
			// id={TextIds.REGRAS_DESC}
			idGetter={(r) => `${r.id}`}
		/>
	);
};

export default RulesPage;
