import { z } from "zod";
import RouteNames from "../navigation/RouteNames";

const SettingsModel = z.object({
	isOpen: z.boolean().default(false),
	isDarkMode: z.boolean().default(false),
	currentRoute: z.nativeEnum(RouteNames).default(RouteNames.ROOT),
});

type SettingsModelType = z.infer<typeof SettingsModel>;

export default SettingsModel;
export type { SettingsModelType };
