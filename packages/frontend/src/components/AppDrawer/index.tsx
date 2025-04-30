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
import coletivo from "../../assets/coletivo.jpg";
import type RouteNames from "../../navigation/RouteNames";
import { getRouteAsList } from "../../navigation/RouteNames";
import { DRAWER_WIDTH, PROJECT_VERSION } from "../../util/constants";
import useSettingsSlice from "@car/storage/src/stores/slices/settings/useSettingsSlice";
import { useUtils } from "@car/storage";

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
							<ListItemText primary={translate(title)} />
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
