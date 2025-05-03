import { z } from "zod";

const SettingsModel = z.object({
	isOpen: z.boolean().default(false),
	isDarkMode: z.boolean().default(false),
});

type SettingsModelType = z.infer<typeof SettingsModel>;

export default SettingsModel;
export type { SettingsModelType };
