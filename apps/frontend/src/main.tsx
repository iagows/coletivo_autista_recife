import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import { registerSW } from "virtual:pwa-register";
import { ColetivoStore } from "@car/storage";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import LoadingSkeleton from "./components/LoadingSkeleton";

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
		<ColetivoStore loading={<LoadingSkeleton />}>
			<App />
		</ColetivoStore>
	</StrictMode>,
);
