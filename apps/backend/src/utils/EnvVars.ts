export const EnvVars = {
	serverMode: process.env.NODE_ENV || "development",
	port: Number.parseInt(process.env.SERVER_PORT || "13131"),
	jwt: {
		create: process.env.JWT_ACCESS_SECRET || "caju",
		renew: process.env.JWT_RENEW_SECRET || "batata",
	},
} as const;

export const isDevMode: boolean = EnvVars.serverMode === "development";
