import { Box, Grid2, Typography } from "@mui/material";
import LoadingSkeleton from "../../components/LoadingSkeleton";
import PrepareDisplay from "../../components/PrepareDisplay";
import { TextIds } from "../../models/TextoModel";
import { useProfissionalSlice } from "../../stores/slices/profissional/useProfissionalSlice";
import { useTextosSlice } from "../../stores/slices/textos/useTextosSlice";
import IndicationItem from "./IndicationItem";

const IndicationsPage = () => {
	const { data, error, loading } = useProfissionalSlice();
	const {
		error: textoError,
		loading: textoLoading,
		getByTextId,
	} = useTextosSlice();

	return (
		<Box>
			<PrepareDisplay
				error={textoError}
				isLoading={textoLoading}
				loadingComponent={<LoadingSkeleton />}
			>
				<Typography variant="h6" component="p">
					{getByTextId(TextIds.INDICACOES_DESC)}
				</Typography>
			</PrepareDisplay>
			<Grid2 container spacing={2}>
				<PrepareDisplay
					error={error}
					isLoading={loading}
					loadingComponent={<LoadingSkeleton w={450} h={250} amount={6} />}
				>
					{data.map((d) => (
						<IndicationItem {...d} key={d.profissional.id} />
					))}
				</PrepareDisplay>
			</Grid2>
		</Box>
	);
};

export default IndicationsPage;
