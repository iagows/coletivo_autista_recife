import { useUtils } from "@car/storage";
import useSettingsSlice from "@car/storage/src/stores/slices/settings/useSettingsSlice";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { AppBar, Box, IconButton, type SxProps, Toolbar } from "@mui/material";
import { DRAWER_WIDTH } from "../../util/constants";
import ConfigArea from "../ConfigArea";
import { PageTitle } from "./PageTitle";

const barCss = (isMobile: boolean): SxProps => ({
	width: `calc(100% - ${isMobile ? 0 : DRAWER_WIDTH}px)`,
	marginLeft: `${isMobile ? 0 : DRAWER_WIDTH}px`,
});

const buttonCss: SxProps = { mr: 2 };

const AppTopbar = () => {
	const { isMobile } = useUtils();
	const { toggleDrawer } = useSettingsSlice();

	return (
		<AppBar sx={barCss(isMobile)}>
			<Toolbar>
				<Box
					flex={1}
					display={"flex"}
					alignItems={"center"}
					justifyContent={"space-between"}
				>
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
					<PageTitle />
					<ConfigArea />
				</Box>
			</Toolbar>
		</AppBar>
	);
};

export default AppTopbar;
