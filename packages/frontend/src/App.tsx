import { useSettings } from "@car/storage";
import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import AppRouter from "./navigation/AppRouter";
import theme from "./util/theme";

const App = () => {
	const { isDarkMode } = useSettings();

	document.title = "Coletivo de autistas adultos de Recife";

	return (
		<ThemeProvider theme={theme(isDarkMode)}>
			<CssBaseline />
			<AppRouter />
		</ThemeProvider>
	);
};

export default App;
