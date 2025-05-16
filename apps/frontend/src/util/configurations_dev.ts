export const Util = {
	isDev: import.meta.env.MODE === "development",
};
// coisas que ainda estão sendo desenvolvidas
// ou que existe um esboço de ideia
export const DevConfigurations = {
	login: Util.isDev,
	cadastros: Util.isDev,
} as const;
