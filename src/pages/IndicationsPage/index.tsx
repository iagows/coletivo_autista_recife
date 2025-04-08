import { Box, Grid2, Typography } from "@mui/material";
import LoadingSkeleton from "../../components/LoadingSkeleton";
import PrepareDisplay from "../../components/PrepareDisplay";
import useUtils from "../../hooks/useUtils";
import { useProfissionalSlice } from "../../stores/slices/profissional/useProfissionalSlice";
import IndicationItem from "./IndicationItem";

const IndicationsPage = () => {
	const { translate } = useUtils();
	const { data, error, loading } = useProfissionalSlice();
	return (
		<Box>
			<Typography>{translate("indicacoes.conteudo")}</Typography>
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
