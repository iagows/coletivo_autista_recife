import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";
import path from "node:path";

// https://vite.dev/config/
export default defineConfig({
	base: "coletivo_autista_recife",
	plugins: [
		react(),
		VitePWA({
			registerType: "autoUpdate",
			includeAssets: ["favicon.ico", "apple-touch-icon.png", "mask-icon.svg"],
			manifest: {
				name: "Coletivo de Autistas Adultos de Recife",
				short_name: "Autistas de Recife",
				description: "Aplicativo para o coletivo de autistas adultos de Recife",
				theme_color: "#7f1f1f",
				display: "standalone",
				icons: [
					{
						src: "pwa-192x192.png",
						sizes: "192x192",
						type: "image/png",
					},
					{
						src: "pwa-512x512.png",
						sizes: "512x512",
						type: "image/png",
					},
				],
			},
		}),
	],
	resolve: {
		alias: {
			"@car/storage": path.resolve(__dirname, "../../packages/storage"),
			"@car/models": path.resolve(__dirname, "../../packages/models"),
		},
	},
	optimizeDeps: {
		include: ["@car/storage", "@car/models"],
	},
});
