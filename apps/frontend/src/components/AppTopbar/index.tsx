import { useUtils } from "@car/storage";
import useSettingsSlice from "@car/storage/src/stores/slices/settings/useSettingsSlice";
import Brightness4Icon from "@mui/icons-material/Brightness4"; // Ícone de lua (dark)
import Brightness7Icon from "@mui/icons-material/Brightness7"; // Ícone de sol (light)
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { AppBar, IconButton, type SxProps, Toolbar } from "@mui/material";
import { DRAWER_WIDTH } from "../../util/constants";
import { PageTitle } from "./PageTitle";

const barCss = (isMobile: boolean): SxProps => ({
	width: `calc(100% - ${isMobile ? 0 : DRAWER_WIDTH}px)`,
	marginLeft: `${isMobile ? 0 : DRAWER_WIDTH}px`,
});

const buttonCss: SxProps = { mr: 2 };

const AppTopbar = () => {
	const { isMobile } = useUtils();
	const { isDarkMode, toggleTheme, toggleDrawer } = useSettingsSlice();

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
				<IconButton color="inherit" onClick={toggleTheme}>
					{isDarkMode ? <Brightness7Icon /> : <Brightness4Icon />}
				</IconButton>{" "}
				<PageTitle />
			</Toolbar>
		</AppBar>
	);
};

export default AppTopbar;
