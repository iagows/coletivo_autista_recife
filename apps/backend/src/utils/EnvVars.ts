export const EnvVars = {
	serverMode: process.env.NODE_ENV || "development",
	port: Number.parseInt(process.env.SERVER_PORT || "13131"),
	smtp: {
		server: process.env.SMTP_SERVER || "smtp.site.net",
		port: Number.parseInt(process.env.SMTP_PORT || "123"),
		user: process.env.SMTP_USER || "seu nome",
		pass: process.env.SMTP_PASS || "sua senha",
	},
	jwt: {
		create: process.env.JWT_ACCESS_SECRET || "caju",
		renew: process.env.JWT_RENEW_SECRET || "batata",
	},
} as const;

export const isDevMode: boolean = EnvVars.serverMode === "development";
