export const EnvVars = {
	serverMode: process.env.NODE_ENV || "development",
	port: Number.parseInt(process.env.SERVER_PORT || "13131"),
	mongo: {
		uri: process.env.MONGODB_URI || "clustername.hash.mongodb.net",
		credential: {
			user: process.env.MONGO_USER || "user",
			pass: process.env.MONGO_PASS || "12345",
		},
		appName: process.env.MONGO_APP_NAME || "app_name",
		databaseName: process.env.MONGO_DATABASE_NAME || "db_name",
		collections: {
			textos: process.env.MONGO_COL_SITE_TEXTS || "site_texts",
			profissionais: process.env.MONGO_COL_SITE_PROF || "site_prof",
			regras: process.env.MONGO_COL_SITE_REGRAS || "site_rules",
		},
	},
	swagger: {
		path: process.env.SWAGGER_API_PATH || "swagger",
	},
} as const;
