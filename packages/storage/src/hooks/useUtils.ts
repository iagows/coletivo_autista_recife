import { useMediaQuery, useTheme } from "@mui/material";
import { useTranslation } from "react-i18next";

type Out = {
	isMobile: boolean;
	translate: (tag: string, args?: { [a: string]: unknown }) => string;
};
const useUtils = (): Out => {
	const { t } = useTranslation();
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

	return {
		isMobile,
		translate: t,
	};
};

export default useUtils;
