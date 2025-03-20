import Brightness4Icon from "@mui/icons-material/Brightness4"; // Ícone de lua (dark)
import Brightness7Icon from "@mui/icons-material/Brightness7"; // Ícone de sol (light)
import {
	AppBar,
	IconButton,
	type SxProps,
	Toolbar,
	Typography,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import { getRouteTitle } from "../../navigation/RouteNames";
import useSettingsSlice from "../../stores/slices/settings/useSettingsSlice";

const titleCss: SxProps = { flexGrow: 1 };

const AppTopbar = () => {
	const { currentRoute, isDarkMode, toggleTheme } = useSettingsSlice();
	const currentPage = getRouteTitle(currentRoute);
	const { t } = useTranslation();
	const title = t(currentPage);

	return (
		<AppBar>
			<Toolbar>
				<Typography variant="h6" sx={titleCss}>
					{title}
				</Typography>
				<IconButton color="inherit" onClick={toggleTheme}>
					{isDarkMode ? <Brightness7Icon /> : <Brightness4Icon />}
				</IconButton>
			</Toolbar>
		</AppBar>
	);
};

export default AppTopbar;
