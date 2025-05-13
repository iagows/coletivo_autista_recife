import { useTextoSlice } from "@car/storage";
import { Typography } from "@mui/material";
import LoadingSkeleton from "../../components/LoadingSkeleton";
import PrepareDisplay from "../../components/PrepareDisplay";

const WhoAreWePage = () => {
	const { error, isLoading } = useTextoSlice();
	return (
		<PrepareDisplay
			error={null}
			// error={error}
			isLoading={isLoading}
			loadingComponent={<LoadingSkeleton />}
		>
			<Typography variant="h6" component="p">
				{/* {getByTextId(TextIds.QUEM_SOMOS)} */}
			</Typography>
		</PrepareDisplay>
	);
};

export default WhoAreWePage;
