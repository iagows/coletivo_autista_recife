import type { SettingsModelType } from "@car/models";
import { type PayloadAction, createSlice } from "@reduxjs/toolkit";

const INITIAL: SettingsModelType = {
	isOpen: false,
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
		toggleTheme(state) {
			state.isDarkMode = !state.isDarkMode;
		},
	},
});

export default configSlice.reducer;
export const { toggleDrawer, setDrawerOpen, toggleTheme } = configSlice.actions;
