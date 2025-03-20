import { red } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

const theme = (isDarkMode: boolean) =>
	createTheme({
		cssVariables: true,
		palette: {
			primary: {
				main: "#556cd6",
			},
			secondary: {
				main: "#19857b",
			},
			error: {
				main: red.A400,
			},
			mode: isDarkMode ? "dark" : "light",
		},
	});

export default theme;
