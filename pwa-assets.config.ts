import {
	combinePresetAndAppleSplashScreens,
	defineConfig,
	minimal2023Preset,
} from "@vite-pwa/assets-generator/config";

// TODO: review deprecated
export default defineConfig({
	preset: combinePresetAndAppleSplashScreens(
		minimal2023Preset,
		{
			// dark splash screens using black background (the default)
			darkResizeOptions: { background: "#7f1f1f", fit: "contain" },
			// or using a custom background color
			// darkResizeOptions: { background: '#1f1f1f' },
		},
		['iPad Air 9.7"'],
	),
	images: ["public/coletivo.jpg"],
});
