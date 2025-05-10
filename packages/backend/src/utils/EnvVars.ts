export const EnvVars = {
	serverMode: process.env.NODE_ENV || "development",
	port: Number.parseInt(process.env.SERVER_PORT || "13131"),
} as const;
