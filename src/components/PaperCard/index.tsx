import { Card, Paper, type SxProps } from "@mui/material";
import type { PropsWithChildren } from "react";

const paperCss: SxProps = {
	borderRadius: 2,
};

const PaperCard = ({ children }: PropsWithChildren) => {
	return (
		<Paper sx={paperCss} elevation={3}>
			<Card>{children}</Card>
		</Paper>
	);
};

export default PaperCard;
