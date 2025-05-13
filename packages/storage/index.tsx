import useUtils from "./src/hooks/useUtils";
import { ColetivoStore } from "./src/index";
import { useProfissionalSlice } from "./src/stores/slices/profissional/useProfissionalSlice";
import { useRegraSlice } from "./src/stores/slices/regras/useRegraSlice";
import useSettingsSlice from "./src/stores/slices/settings/useSettingsSlice";
import useSettings from "./src/stores/slices/settings/useSettingsSlice";
import { useTextosSlice } from "./src/stores/slices/textos/useTextosSlice";

export {
	ColetivoStore,
	useUtils,
	useSettings,
	useProfissionalSlice,
	useRegraSlice,
	useSettingsSlice,
	useTextosSlice,
};
