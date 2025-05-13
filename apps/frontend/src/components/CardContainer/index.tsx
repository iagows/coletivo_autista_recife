import { Box, type SxProps } from "@mui/system";
import type { PropsWithChildren } from "react";

const boxCss: SxProps = {
	p: 3,
	gap: 2,
	display: "flex",
	flexDirection: "column",
};

const CardContainer = ({ children }: PropsWithChildren) => {
	return <Box sx={boxCss}>{children}</Box>;
};

export default CardContainer;
