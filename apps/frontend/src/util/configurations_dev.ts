export const Util = {
	isDev: import.meta.env.MODE === "development",
} as const;

// coisas que ainda estão sendo desenvolvidas
// ou que existe um esboço de ideia
export const DevConfigurations = {
	login: Util.isDev,
	cadastros: Util.isDev,
	isAuth: Util.isDev,
} as const;
