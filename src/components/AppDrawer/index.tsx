import {
	Box,
	List,
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
	Drawer as MuiDrawer,
	type SxProps,
	Typography,
} from "@mui/material";
import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import lemniscata from "../../assets/lemniscate.jpg";
import useUtils from "../../hooks/useUtils";
import type RouteNames from "../../navigation/RouteNames";
import { getRouteAsList } from "../../navigation/RouteNames";
import useSettingsSlice from "../../stores/slices/settings/useSettingsSlice";
import { DRAWER_WIDTH, PROJECT_VERSION } from "../../util/constants";

const drawer_css: SxProps = {
	width: DRAWER_WIDTH,
	flexShrink: 0,
	"& .MuiDrawer-paper": {
		display: "flex",
		width: DRAWER_WIDTH,
		boxSizing: "border-box",
		flexDirection: "column",
		backgroundColor: "#3b6480",
	},
};

const textCss: SxProps = {
	color: "white", // Texto branco
	textShadow: `
		-1px -1px 0 #04101d,  
		1px -1px 0 #04101d,
		-1px 1px 0 #04101d,
		1px 1px 0 #04101d
	`, // Contorno forte
};

const versionCss: SxProps = {
	p: 2,
	mt: "auto", // Empurra o texto para a parte inferior
	textAlign: "center",
};

const imageCss: SxProps = {
	width: DRAWER_WIDTH - 1,
	height: DRAWER_WIDTH - 1,
	backgroundImage: `url(${lemniscata})`,
	backgroundSize: "cover",
	backgroundPosition: "center",
};

const spacerCss: SxProps = {
	height: 16,
};

const AppDrawer = () => {
	const location = useLocation();
	const { isOpen, currentRoute, toggleDrawer, setCurrentRoute } =
		useSettingsSlice();
	const { isMobile, translate } = useUtils();

	const handleDrawerToggle = () => {
		if (isMobile) {
			toggleDrawer();
		}
	};

	useEffect(() => {
		setCurrentRoute(location.pathname as RouteNames);
	}, [location, setCurrentRoute]);

	return (
		<MuiDrawer
			variant={isMobile ? "temporary" : "permanent"}
			open={isOpen}
			onClose={handleDrawerToggle}
			sx={drawer_css}
		>
			<Box sx={imageCss} />

			<Box sx={spacerCss} />
			<List>
				{getRouteAsList().map(({ Icon, path, title }) => (
					<ListItem key={`${title}_${translate(title)}`} disablePadding>
						<ListItemButton
							to={path}
							component={Link}
							disabled={currentRoute === path}
							onClick={isMobile ? toggleDrawer : undefined}
						>
							<ListItemIcon>
								<Icon />
							</ListItemIcon>
							<ListItemText primary={translate(title)} sx={textCss} />
						</ListItemButton>
					</ListItem>
				))}
			</List>
			<Box sx={versionCss}>
				<Typography variant="body2" color="textSecondary">
					Versão: {PROJECT_VERSION}
				</Typography>
			</Box>
		</MuiDrawer>
	);
};

export default AppDrawer;
