import { useTextosSlice } from "@car/storage";
import { Typography } from "@mui/material";
import LoadingSkeleton from "../../components/LoadingSkeleton";
import PrepareDisplay from "../../components/PrepareDisplay";

const WhoAreWePage = () => {
	const { error, getByTextId, loading } = useTextosSlice();
	return (
		<PrepareDisplay
			error={error}
			isLoading={loading}
			loadingComponent={<LoadingSkeleton />}
		>
			<Typography variant="h6" component="p">
				{/* {getByTextId(TextIds.QUEM_SOMOS)} */}
			</Typography>
		</PrepareDisplay>
	);
};

export default WhoAreWePage;
