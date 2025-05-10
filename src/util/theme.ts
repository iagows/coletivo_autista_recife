import { createTheme } from "@mui/material/styles";

const theme = (isDarkMode: boolean) =>
	createTheme({
		cssVariables: true,
		palette: isDarkMode
			? {
					mode: "dark",
					primary: {
						main: "#ff4646",
					},
					secondary: {
						main: "#4098f9",
					},
					text: {
						primary: "#b3b3b3",
					},
				}
			: {
					mode: "light",
					primary: {
						main: "#810732",
						contrastText: "#f8f9f4",
					},
					secondary: {
						main: "#3f51b5",
						contrastText: "#e5eaf1",
					},
					background: {
						paper: "#f0f0f0",
					},
				},
	});

export default theme;
