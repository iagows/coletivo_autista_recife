import { type PayloadAction, createSlice } from "@reduxjs/toolkit";
import type { SettingsModelType } from "../../../models/SettingsModel";
import RouteNames from "../../../navigation/RouteNames";

const INITIAL: SettingsModelType = {
	isOpen: false,
	currentRoute: RouteNames.ROOT,
	isDarkMode: true,
};

const configSlice = createSlice({
	name: "drawer_config",
	initialState: INITIAL,
	reducers: {
		toggleDrawer(state) {
			state.isOpen = !state.isOpen;
		},
		setDrawerOpen(state, action: PayloadAction<boolean>) {
			state.isOpen = action.payload;
		},
		setCurrentRoute(state, action: PayloadAction<RouteNames>) {
			state.currentRoute = action.payload;
		},
		toggleTheme(state) {
			state.isDarkMode = !state.isDarkMode;
		},
	},
});

export default configSlice.reducer;
export const { toggleDrawer, setDrawerOpen, setCurrentRoute, toggleTheme } =
	configSlice.actions;
