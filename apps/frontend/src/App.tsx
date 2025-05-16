import { useSettings } from "@car/storage";
import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import MainRouter from "./navigation/Router";
import theme from "./util/theme";

const App = () => {
	const { isDarkMode } = useSettings();

	document.title = "Coletivo de autistas adultos de Recife";

	return (
		<ThemeProvider theme={theme(isDarkMode)}>
			<CssBaseline />
			<MainRouter />
		</ThemeProvider>
	);
};

export default App;
