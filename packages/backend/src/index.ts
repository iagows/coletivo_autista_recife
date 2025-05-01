import { DependencyInjection } from "@car/utils";
import type { Db } from "mongodb";
import { ProfissionalController } from "./controllers/ProfissionalController";
import { TextoController } from "./controllers/TextoController";
import { ProfissionalRepository } from "./repositories/ProfissionalRepository";
import { TextoRepository } from "./repositories/TextoRepository";
import { ProfissionalService } from "./services/ProfissionalService";
import { TextoService } from "./services/TextoService";
import { EnvVars } from "./utils/EnvVars";
import { getMongoDatabase } from "./utils/mongoHelp";
import Elysia from "elysia";
import swagger from "@elysiajs/swagger";

const Main = async () => {
	const db = await getMongoDatabase();

	DependencyInjection.register(TextoRepository, new TextoRepository(db));
	DependencyInjection.register(
		ProfissionalRepository,
		new ProfissionalRepository(db),
	);
	DependencyInjection.register(TextoService, new TextoService());
	DependencyInjection.register(ProfissionalService, new ProfissionalService());

	const textoController = new TextoController();
	const profcontroller = new ProfissionalController();

	const swaggerPath = EnvVars.swagger.path;

	const swaggerConfig = {
		path: swaggerPath,
		documentation: {
			info: {
				title: "API do site do Coletivo de Autistas Adultos de Recife",
				version: "1.0.0",
				description: "API de gerenciamento de conteúdos",
			},
			tags: [textoController.getTag(), profcontroller.getTag()],
		},
	};

	const app = new Elysia()
		.use(swagger(swaggerConfig))
		.get("/", () => "API - Bem vindo!", {
			detail: {
				summary: "Página inicial",
				description: "Rota raiz da API",
				tags: ["Geral"],
			},
		})
		.group("/api", (app) =>
			app //
				.use(textoController.getRoutes()) //
				.use(profcontroller.getRoutes()),
		)
		.listen(EnvVars.port);

	// Logs de inicialização
	const serverUrl = `http://${app.server?.hostname}:${app.server?.port}`;
	console.log(`🦊 Servidor Elysia rodando em ${serverUrl}`);
	console.log(
		`📚 Documentação Swagger disponível em ${serverUrl}${swaggerPath}`,
	);
	console.log("🗂  Endpoints disponíveis:");
	console.log(`- ${serverUrl}/api/textos`);
	console.log(`- ${serverUrl}/api/telefones`);
};

Main().catch(console.error);
