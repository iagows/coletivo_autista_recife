import { Box, Typography } from "@mui/material";
import LoadingSkeleton from "../../components/LoadingSkeleton";
import PrepareDisplay from "../../components/PrepareDisplay";
import { TextIds } from "../../models/TextoModel";
import { useTextosSlice } from "../../stores/slices/textos/useTextosSlice";

const EscolaPage = () => {
	const { error, getByTextId, loading } = useTextosSlice();

	return (
		<Box>
			<PrepareDisplay
				error={error}
				isLoading={loading}
				loadingComponent={<LoadingSkeleton />}
			>
				<Typography variant="h6" component="p">
					{getByTextId(TextIds.ESCOLA)}
				</Typography>
			</PrepareDisplay>
		</Box>
	);
};

export default EscolaPage;
