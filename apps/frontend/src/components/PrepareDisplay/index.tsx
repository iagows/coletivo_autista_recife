import { Typography } from "@mui/material";
import type { PropsWithChildren, ReactNode } from "react";

type Props = {
	error: string | null;
	isLoading: boolean;
	loadingComponent: ReactNode;
};

const PrepareDisplay = ({
	error,
	children,
	isLoading,
	loadingComponent,
}: PropsWithChildren<Props>) => {
	return (
		<>
			{error ? (
				<Typography>{error}</Typography>
			) : isLoading ? (
				loadingComponent
			) : (
				children
			)}
		</>
	);
};

export default PrepareDisplay;
