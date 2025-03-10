import { useTranslation } from "react-i18next";
import AppRouter from "./navigation/AppRouter";

const App = () => {
	const { t } = useTranslation();
	document.title = t("page.title");
	return <AppRouter />;
};

export default App;
