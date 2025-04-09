import { Typography } from "@mui/material";
import LoadingSkeleton from "../../components/LoadingSkeleton";
import PrepareDisplay from "../../components/PrepareDisplay";
import { TextIds } from "../../models/TextoModel";
import { useTextosSlice } from "../../stores/slices/textos/useTextosSlice";

const WhoAreWePage = () => {
	const { error, getByTextId, loading } = useTextosSlice();
	return (
		<PrepareDisplay
			error={error}
			isLoading={loading}
			loadingComponent={<LoadingSkeleton />}
		>
			<Typography variant="h6" component="p">
				{getByTextId(TextIds.QUEM_SOMOS)}
			</Typography>
		</PrepareDisplay>
	);
};

export default WhoAreWePage;
