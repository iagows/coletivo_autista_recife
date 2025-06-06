import { setDrawerOpen as sliceSetOpen, toggleDrawer as sliceToggleDrawer, toggleTheme as sliceToggleTheme } from ".";
import { useAppDispatch, useAppSelector } from "../../../hooks/reduxHooks";

type Out = {
	isOpen: boolean;
	isDarkMode: boolean;
	toggleTheme: () => void;
	toggleDrawer: () => void;
	setDrawerOpen: (isOpen: boolean) => void;
};

const useSettingsSlice = (): Out => {
	const dispatcher = useAppDispatch();

	const { isDarkMode, isOpen } = useAppSelector((state) => state.settings);

	const toggleDrawer = (): void => {
		dispatcher(sliceToggleDrawer());
	};

	const toggleTheme = (): void => {
		dispatcher(sliceToggleTheme());
	};

	const setDrawerOpen = (open: boolean): void => {
		dispatcher(sliceSetOpen(open));
	};

	return {
		isOpen,
		isDarkMode,
		toggleTheme,
		toggleDrawer,
		setDrawerOpen,
	};
};

export default useSettingsSlice;
