import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import useUtils from "./hooks/useUtils";
import AppRouter from "./navigation/AppRouter";
import useSettingsSlice from "./stores/slices/settings/useSettingsSlice";
import theme from "./util/theme";

const App = () => {
	const { translate } = useUtils();
	const { isDarkMode } = useSettingsSlice();

	document.title = translate("page.title");

	return (
		<ThemeProvider theme={theme(isDarkMode)}>
			<CssBaseline />
			<AppRouter />
		</ThemeProvider>
	);
};

export default App;
