import { Box, Grid2, Typography } from "@mui/material";
import type { PropsWithChildren } from "react";
import type { TextIds } from "../../models/TextoModel";
import type { useTextosSlice } from "../../stores/slices/textos/useTextosSlice";
import LoadingSkeleton from "../LoadingSkeleton";
import PrepareDisplay from "../PrepareDisplay";

type FromTextoSlice = ReturnType<typeof useTextosSlice>;

type PropData = {
	id: TextIds;
	data: FromTextoSlice;
};

const DataDisplay = ({ id, data, children }: PropsWithChildren<PropData>) => {
	return (
		<Box>
			<PrepareDisplay
				loadingComponent={<LoadingSkeleton />}
				isLoading={data.loading}
				error={data.error}
			>
				<Typography variant="h6" component="p">
					{data.getByTextId(id)}
				</Typography>
			</PrepareDisplay>
			<Grid2 container spacing={2}>
				{children}
			</Grid2>
		</Box>
	);
};

export default DataDisplay;
