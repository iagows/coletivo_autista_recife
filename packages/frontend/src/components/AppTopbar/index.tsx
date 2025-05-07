import { useUtils } from "@car/storage";
import useSettingsSlice from "@car/storage/src/stores/slices/settings/useSettingsSlice";
import Brightness4Icon from "@mui/icons-material/Brightness4"; // Ícone de lua (dark)
import Brightness7Icon from "@mui/icons-material/Brightness7"; // Ícone de sol (light)
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import {
	AppBar,
	IconButton,
	type SxProps,
	Toolbar,
	Typography,
} from "@mui/material";
import { useLocation } from "react-router";
import type RouteNames from "../../navigation/RouteNames";
import { getRouteTitle } from "../../navigation/RouteNames";
import { DRAWER_WIDTH } from "../../util/constants";

const titleCss: SxProps = { flexGrow: 1 };
const barCss = (isMobile: boolean): SxProps => ({
	width: `calc(100% - ${isMobile ? 0 : DRAWER_WIDTH}px)`,
	marginLeft: `${isMobile ? 0 : DRAWER_WIDTH}px`,
});

const buttonCss: SxProps = { mr: 2 };

const AppTopbar = () => {
	const currentRoute = useLocation().pathname;
	const { isMobile } = useUtils();
	const { isDarkMode, toggleTheme, toggleDrawer } = useSettingsSlice();

	const currentPage = getRouteTitle(currentRoute as RouteNames);
	const title = currentPage;

	return (
		<AppBar sx={barCss(isMobile)}>
			<Toolbar>
				{isMobile && ( // Botão de menu visível apenas no mobile
					<IconButton
						edge="start"
						sx={buttonCss}
						color="inherit"
						onClick={toggleDrawer}
					>
						<MenuOutlinedIcon />
					</IconButton>
				)}
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
