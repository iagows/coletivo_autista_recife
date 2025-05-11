import swagger from "@elysiajs/swagger";
import Elysia from "elysia";
import { ServerRoutes } from "./routes";
import { EnvVars, isDevMode } from "./utils/EnvVars";

const Main = async () => {
	const app = new Elysia().use(ServerRoutes());

	if (isDevMode) {
		app.use(swagger());
	}

	app.listen(EnvVars.port);

	// Logs de inicialização
	const serverUrl = `http://${app.server?.hostname}:${app.server?.port}`;
	console.log(`🦊 Servidor Elysia rodando em ${serverUrl}`);
};

Main().catch(console.error);
