import { DependencyInjection } from "@car/utils";
import swagger from "@elysiajs/swagger";
import Elysia from "elysia";
import { ProfissionalController } from "./controllers/ProfissionalController";
import { RegraController } from "./controllers/RegraController";
import { TextoController } from "./controllers/TextoController";
import { ProfissionalRepository } from "./repositories/ProfissionalRepository";
import { RegraRepository } from "./repositories/RegraRepository";
import { TextoRepository } from "./repositories/TextoRepository";
import { ProfissionalService } from "./services/ProfissionalService";
import { RegraService } from "./services/RegraService";
import { TextoService } from "./services/TextoService";
import { EnvVars } from "./utils/EnvVars";
import { getMongoDatabase } from "./utils/mongoHelp";
import { AdminRepository } from "./repositories/AdminsRepository";
import { AdminService } from "./services/AdminService";
import { AdminController } from "./controllers/AdminController";

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
	const profcontroller = new ProfissionalController();
	const regraController = new RegraController();
	const adminsController = new AdminController();

	const swaggerPath = EnvVars.swagger.path;

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
				profcontroller.getTag(),
				regraController.getTag(),
				adminsController.getTag(),
			],
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
			app
				.use(textoController.getRoutes())
				.use(profcontroller.getRoutes())
				.use(regraController.getRoutes())
				.use(adminsController.getRoutes()),
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
	console.log(`- ${serverUrl}/api/profissionais`);
	console.log(`- ${serverUrl}/api/regras`);
	console.log(`- ${serverUrl}/api/admins`);
};

Main().catch(console.error);
