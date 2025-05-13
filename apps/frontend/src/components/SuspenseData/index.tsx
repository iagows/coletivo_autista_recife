import type { useTextoSlice } from "@car/storage";
import { Box, Grid2, Typography } from "@mui/material";
import type { ReactNode } from "react";
import LoadingSkeleton from "../LoadingSkeleton";
import PrepareDisplay from "../PrepareDisplay";

type FromTextoSlice = ReturnType<typeof useTextoSlice>;

type Props<T> = {
	data?: T[];
	// id: TextIds;
	loading: boolean;
	// error: string | null;
	textData: FromTextoSlice;
	idGetter: (d: T) => string;
	component: (d: T) => ReactNode;
};
const SuspenseData = <T,>({
	// id,
	// error,
	loading,
	idGetter,
	textData,
	data = [],
	component: C,
}: Props<T>) => {
	return (
		<Box>
			<PrepareDisplay
				error={null}
				// error={textData.error}
				isLoading={textData.isLoading}
				loadingComponent={<LoadingSkeleton />}
			>
				<Typography variant="h6" component="p">
					{/* {textData.getByTextId(id)} */}
				</Typography>
			</PrepareDisplay>
			<Grid2 container spacing={2}>
				<PrepareDisplay
					error={null}
					// error={error}
					isLoading={loading}
					loadingComponent={<LoadingSkeleton w={450} h={250} amount={6} />}
				>
					{data.map((d) => (
						<C key={idGetter(d)} {...d} />
					))}
				</PrepareDisplay>
			</Grid2>
		</Box>
	);
};

export default SuspenseData;
