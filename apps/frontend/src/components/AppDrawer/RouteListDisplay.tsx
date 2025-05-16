import { useTextoSlice, useUtils } from "@car/storage";
import useSettingsSlice from "@car/storage/src/stores/slices/settings/useSettingsSlice";
import {
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
} from "@mui/material";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import type RouteNames from "../../navigation/RouteNames";
import { getRouteAsList } from "../../navigation/RouteNames";
import { useLocation } from "react-router-dom";
import LoadingSkeleton from "../LoadingSkeleton";

const RouteListDisplay = () => {
	const location = useLocation();
	const { isMobile } = useUtils();
	const { toggleDrawer } = useSettingsSlice();
	const { getByReference, isLoading } = useTextoSlice();
	const [currentRoute, setCurrentRoute] = useState<string>(location.pathname);

	useEffect(() => {
		setCurrentRoute(location.pathname as RouteNames);
	}, [location]);

	return (
		<>
			{isLoading ? (
				<LoadingSkeleton amount={6} h={10} />
			) : (
				getRouteAsList().map(({ Icon, path, title }) => (
					<ListItem key={`${title}_${title}`} disablePadding>
						<ListItemButton
							to={path}
							component={Link}
							disabled={currentRoute === path}
							onClick={isMobile ? toggleDrawer : undefined}
						>
							<ListItemIcon>
								<Icon />
							</ListItemIcon>
							<ListItemText primary={getByReference(title)} />
						</ListItemButton>
					</ListItem>
				))
			)}
		</>
	);
};

export default RouteListDisplay;
