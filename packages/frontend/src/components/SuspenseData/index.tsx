import type { TextIds } from "@car/models/src/models/TextoModel";
import type { useTextosSlice } from "@car/storage";
import { Box, Grid2, Typography } from "@mui/material";
import type { ReactNode } from "react";
import LoadingSkeleton from "../LoadingSkeleton";
import PrepareDisplay from "../PrepareDisplay";

type FromTextoSlice = ReturnType<typeof useTextosSlice>;

type Props<T> = {
	data: T[];
	id: TextIds;
	loading: boolean;
	error: string | null;
	textData: FromTextoSlice;
	idGetter: (d: T) => string;
	component: (d: T) => ReactNode;
};
const SuspenseData = <T,>({
	id,
	data,
	error,
	loading,
	idGetter,
	textData,
	component: C,
}: Props<T>) => {
	return (
		<Box>
			<PrepareDisplay
				error={textData.error}
				isLoading={textData.loading}
				loadingComponent={<LoadingSkeleton />}
			>
				<Typography variant="h6" component="p">
					{textData.getByTextId(id)}
				</Typography>
			</PrepareDisplay>
			<Grid2 container spacing={2}>
				<PrepareDisplay
					error={error}
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
