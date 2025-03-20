import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { useTranslation } from "react-i18next";
import AppRouter from "./navigation/AppRouter.tsx";
import useSettingsSlice from "./stores/slices/settings/useSettingsSlice.ts";
import theme from "./util/theme.ts";

const App = () => {
	const { t } = useTranslation();
	const { isDarkMode } = useSettingsSlice();

	document.title = t("page.title");

	return (
		<ThemeProvider theme={theme(isDarkMode)}>
			<CssBaseline />
			<AppRouter />
		</ThemeProvider>
	);
};

export default App;
