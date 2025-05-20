import { useUtils } from "@car/storage";
import useSettingsSlice from "@car/storage/src/stores/slices/settings/useSettingsSlice";
import { Box, Drawer as MuiDrawer, type SxProps, Typography } from "@mui/material";
import coletivo from "../../assets/coletivo.jpg";
import { DRAWER_WIDTH, PROJECT_VERSION } from "../../util/constants";
import RouteListDisplay from "./RouteListDisplay";

const drawer_css: SxProps = {
	width: DRAWER_WIDTH,
	flexShrink: 0,
	"& .MuiDrawer-paper": {
		display: "flex",
		width: DRAWER_WIDTH,
		boxSizing: "border-box",
		flexDirection: "column",
	},
};

const versionCss: SxProps = {
	p: 2,
	mt: "auto", // Empurra o texto para a parte inferior
	textAlign: "center",
};

const imageCss: SxProps = {
	width: DRAWER_WIDTH - 1,
	height: DRAWER_WIDTH - 1,
	backgroundImage: `url(${coletivo})`,
	backgroundSize: "cover",
	backgroundPosition: "center",
};

const spacerCss: SxProps = {
	height: 16,
};

const AppDrawer = () => {
	const { isOpen, toggleDrawer } = useSettingsSlice();
	const { isMobile } = useUtils();

	const handleDrawerToggle = () => {
		if (isMobile) {
			toggleDrawer();
		}
	};

	return (
		<MuiDrawer
			variant={isMobile ? "temporary" : "permanent"}
			open={isOpen}
			onClose={handleDrawerToggle}
			sx={drawer_css}
		>
			<Box sx={imageCss} />
			<Box sx={spacerCss} />
			<RouteListDisplay />
			<Box sx={versionCss}>
				<Typography variant="body2" color="textSecondary">
					Versão: {PROJECT_VERSION}
				</Typography>
			</Box>
		</MuiDrawer>
	);
};

export default AppDrawer;
