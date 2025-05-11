import swagger from "@elysiajs/swagger";
import Elysia from "elysia";
import { PrismaClient } from "../generated/prisma";
import { ServerRoutes } from "./routes";
import { EnvVars } from "./utils/EnvVars";

const Main = async () => {
	const db = new PrismaClient();

	const app = new Elysia().use(ServerRoutes());
	if (EnvVars.serverMode === "development") {
		app.use(swagger());
	}

	app.listen(EnvVars.port);

	// Logs de inicialização
	const serverUrl = `http://${app.server?.hostname}:${app.server?.port}`;
	console.log(`🦊 Servidor Elysia rodando em ${serverUrl}`);
};

Main().catch(console.error);
