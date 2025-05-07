import { useMediaQuery, useTheme } from "@mui/material";

type Out = {
	isMobile: boolean;
};
const useUtils = (): Out => {
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

	return {
		isMobile,
	};
};

export default useUtils;
