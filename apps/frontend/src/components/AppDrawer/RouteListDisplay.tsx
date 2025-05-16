import { useTextoSlice, useUtils } from "@car/storage";
import useSettingsSlice from "@car/storage/src/stores/slices/settings/useSettingsSlice";
import {
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
} from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import { getRoutes, getTitleByRoute } from "../../navigation/routes";
import LoadingSkeleton from "../LoadingSkeleton";

const RouteListDisplay = () => {
	const location = useLocation();
	const { isMobile } = useUtils();
	const { toggleDrawer } = useSettingsSlice();
	const { getByReference, isLoading } = useTextoSlice();

	if (isLoading) return <LoadingSkeleton amount={6} h={10} />;

	return (
		<>
			{getRoutes().map(({ Icon, path }) => (
				<ListItem key={path} disablePadding>
					<ListItemButton
						component={Link}
						to={path}
						selected={location.pathname === path}
						onClick={isMobile ? toggleDrawer : undefined}
					>
						<ListItemIcon>
							<Icon />
						</ListItemIcon>
						<ListItemText primary={getByReference(getTitleByRoute(path))} />
					</ListItemButton>
				</ListItem>
			))}
		</>
	);
};

export default RouteListDisplay;
