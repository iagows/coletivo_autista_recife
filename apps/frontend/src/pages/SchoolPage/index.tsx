import { useTextoSlice } from "@car/storage";
import { Box, Typography } from "@mui/material";
import LoadingSkeleton from "../../components/LoadingSkeleton";
import PrepareDisplay from "../../components/PrepareDisplay";

const SchoolPage = () => {
	const { error, isLoading } = useTextoSlice();

	return (
		<Box>
			<PrepareDisplay
				error={null}
				// error={error}
				isLoading={isLoading}
				loadingComponent={<LoadingSkeleton />}
			>
				<Typography variant="h6" component="p">
					{/* {getByTextId(TextIds.ESCOLA)} */}
				</Typography>
			</PrepareDisplay>
		</Box>
	);
};

export default SchoolPage;
