import { DependencyInjection } from "@car/utils";
import swagger from "@elysiajs/swagger";
import Elysia from "elysia";
import { AdminController } from "./controllers/AdminController";
import { ProfissionalController } from "./controllers/ProfissionalController";
import { RegraController } from "./controllers/RegraController";
import { TextoController } from "./controllers/TextoController";
import { AdminRepository } from "./repositories/AdminsRepository";
import { ProfissionalRepository } from "./repositories/ProfissionalRepository";
import { RegraRepository } from "./repositories/RegraRepository";
import { TextoRepository } from "./repositories/TextoRepository";
import { AdminService } from "./services/AdminService";
import { ProfissionalService } from "./services/ProfissionalService";
import { RegraService } from "./services/RegraService";
import { TextoService } from "./services/TextoService";
import { EnvVars } from "./utils/EnvVars";
import { getMongoDatabase } from "./utils/mongoHelp";

const Main = async () => {
	const db = await getMongoDatabase();

	// repositories
	DependencyInjection.register(TextoRepository, new TextoRepository(db));
	DependencyInjection.register(
		ProfissionalRepository,
		new ProfissionalRepository(db),
	);
	DependencyInjection.register(RegraRepository, new RegraRepository(db));
	DependencyInjection.register(AdminRepository, new AdminRepository(db));

	// services
	DependencyInjection.register(TextoService, new TextoService());
	DependencyInjection.register(ProfissionalService, new ProfissionalService());
	DependencyInjection.register(RegraService, new RegraService());
	DependencyInjection.register(AdminService, new AdminService());

	// controllers
	const textoController = new TextoController();
	const profissionalController = new ProfissionalController();
	const regraController = new RegraController();
	const adminsController = new AdminController();

	const swaggerPath = EnvVars.swagger.path;

	const app = new Elysia()
		.get("/", () => "API - Bem vindo!", {
			detail: {
				summary: "Página inicial",
				description: "Rota raiz da API",
				tags: ["Geral"],
			},
		})
		.group("/api", (app) =>
			app
				.use(textoController.getRoutes())
				.use(profissionalController.getRoutes())
				.use(regraController.getRoutes())
				.use(adminsController.getRoutes()),
		)
		.listen(EnvVars.port);

	if (EnvVars.serverMode === "development") {
		const swaggerConfig = {
			path: swaggerPath,
			documentation: {
				info: {
					version: "1.0.1",
					description: "API de gerenciamento de conteúdos",
					title: "API do site do Coletivo de Autistas Adultos de Recife",
				},
				tags: [
					textoController.getTag(),
					profissionalController.getTag(),
					regraController.getTag(),
					adminsController.getTag(),
				],
			},
		};
		app.use(swagger(swaggerConfig));
	}

	// Logs de inicialização
	const serverUrl = `http://${app.server?.hostname}:${app.server?.port}`;
	console.log(`🦊 Servidor Elysia rodando em ${serverUrl}`);
	console.log(
		`📚 Documentação Swagger disponível em ${serverUrl}${swaggerPath}`,
	);
	console.log("🗂  Endpoints disponíveis:");
	console.log(`- ${serverUrl}/api/textos`);
	console.log(`- ${serverUrl}/api/profissionais`);
	console.log(`- ${serverUrl}/api/regras`);
	console.log(`- ${serverUrl}/api/admins`);
};

Main().catch(console.error);
