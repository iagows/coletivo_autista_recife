import { Type, type Static } from "@sinclair/typebox";

export const settingsDto = Type.Object({
	isOpen: Type.Boolean(),
	isDarkMode: Type.Boolean(),
});

export type settingsDtoType = Static<typeof settingsDto>;
