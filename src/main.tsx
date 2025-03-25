import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "./i18n/config";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App.tsx";
import { store } from "./stores/index.ts";
import { registerSW } from "virtual:pwa-register";

const updateSW = registerSW({
	onNeedRefresh() {
		if (confirm("Novo conteúdo disponível. Recarregar?")) {
			updateSW(true);
		}
	},
});

const doc = document.getElementById("root");

if (!doc) {
	throw new Error("Documento raiz não encontrado");
}

createRoot(doc).render(
	<StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</StrictMode>,
);
