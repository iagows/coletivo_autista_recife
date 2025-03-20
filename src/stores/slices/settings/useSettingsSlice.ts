import {
	setDrawerOpen as sliceSetOpen,
	setCurrentRoute as sliceSetRoute,
	toggleDrawer as sliceToggleDrawer,
	toggleTheme as sliceToggleTheme,
} from ".";
import { useAppDispatch, useAppSelector } from "../../../hooks/reduxHooks";
import type RouteNames from "../../../navigation/RouteNames";

type Out = {
	currentRoute: RouteNames;
	isDarkMode: boolean;
	isOpen: boolean;
	toggleDrawer: () => void;
	toggleTheme: () => void;
	setCurrentRoute: (route: RouteNames) => void;
	setDrawerOpen: (isOpen: boolean) => void;
};

const useSettingsSlice = (): Out => {
	const dispatcher = useAppDispatch();

	const { currentRoute, isDarkMode, isOpen } = useAppSelector(
		(state) => state.settings,
	);

	const toggleDrawer = (): void => {
		dispatcher(sliceToggleDrawer());
	};

	const toggleTheme = (): void => {
		dispatcher(sliceToggleTheme());
	};

	const setCurrentRoute = (route: RouteNames): void => {
		dispatcher(sliceSetRoute(route));
	};

	const setDrawerOpen = (open: boolean): void => {
		dispatcher(sliceSetOpen(open));
	};

	return {
		isOpen,
		isDarkMode,
		currentRoute,
		toggleTheme,
		toggleDrawer,
		setDrawerOpen,
		setCurrentRoute,
	};
};

export default useSettingsSlice;
