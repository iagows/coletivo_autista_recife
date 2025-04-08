import DataDisplay from "../../components/DataDisplay";
import LoadingSkeleton from "../../components/LoadingSkeleton";
import PrepareDisplay from "../../components/PrepareDisplay";
import { TextIds } from "../../models/TextoModel";
import { useProfissionalSlice } from "../../stores/slices/profissional/useProfissionalSlice";
import { useTextosSlice } from "../../stores/slices/textos/useTextosSlice";
import IndicationItem from "./IndicationItem";

const IndicationsPage = () => {
	const { data, error, loading } = useProfissionalSlice();
	const textoData = useTextosSlice();

	return (
		<DataDisplay data={textoData} id={TextIds.INDICACOES_DESC}>
			<PrepareDisplay
				error={error}
				isLoading={loading}
				loadingComponent={<LoadingSkeleton w={450} h={250} amount={6} />}
			>
				{data.map((d) => (
					<IndicationItem {...d} key={d.profissional.id} />
				))}
			</PrepareDisplay>
		</DataDisplay>
	);
};

export default IndicationsPage;
