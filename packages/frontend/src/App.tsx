import { useSettings, useUtils } from "@car/storage";
import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import AppRouter from "./navigation/AppRouter";
import theme from "./util/theme";

const App = () => {
	const { translate } = useUtils();
	const { isDarkMode } = useSettings();

	document.title = translate("page.title");

	return (
		<ThemeProvider theme={theme(isDarkMode)}>
			<CssBaseline />
			<AppRouter />
		</ThemeProvider>
	);
};

export default App;
