import { TextoModel, type TextoModelType } from "@car/models";
import { swagger } from "@elysiajs/swagger";
import { Elysia } from "elysia";
import type { Db } from "mongodb";
import { z } from "zod";
import { EnvVars } from "./utils/EnvVars";
import { getCollections, getMongoDatabase } from "./utils/mongoHelp";
import { zodToOpenAPI } from "./utils/zodToOpenApi";

const TextosListResponse = z.array(TextoModel);

type RouteContext = {
	db: Db;
};

const Main = async () => {
	const mongoDb = await getMongoDatabase();

	const swaggerConfig = {
		path: "/docs",
		documentation: {
			info: {
				title: "API do site do Coletivo de Autistas Adultos de Recife",
				version: "1.0.0",
				description: "API de gerenciamento de textos",
			},
			tags: [{ name: "Textos", description: "Textos exibidos no site" }],
		},
	};

	const textosRoutes = (app: Elysia) =>
		app.group("/api/textos", (app) =>
			app.get(
				"/",
				async ({ db }: RouteContext) => {
					const textos = await db
						.collection<TextoModelType>(getCollections().textos)
						.find()
						.toArray();

					const result = TextosListResponse.safeParse(textos);
					if (!result.success) {
						throw new Error("Formato de dados inválido");
					}

					return result.data;
				},
				{
					detail: {
						tags: ["Textos"],
						summary: "Listar todos os textos",
						description: "Retorna um array com todos os textos cadastrados",
						responses: {
							200: {
								description: "Listagem bem-sucedida",
								content: {
									"application/json": {
										schema: zodToOpenAPI(TextosListResponse),
									},
								},
							},
							500: {
								description: "Erro no servidor",
								content: {
									"application/json": {
										schema: {
											type: "object",
											properties: {
												error: { type: "string" },
											},
										},
									},
								},
							},
						},
					},
				},
			),
		);

	const app = new Elysia()
		.use(swagger(swaggerConfig))
		.decorate("db", mongoDb)
		.get("/", () => "API de Textos - Bem vindo!", {
			detail: {
				summary: "Página inicial",
				description: "Rota raiz da API",
				tags: ["Geral"],
			},
		})
		.use(textosRoutes)
		.listen(EnvVars.port);

	const serverUrl = `http://${app.server?.hostname}:${app.server?.port}`;
	console.log(`🦊 Servidor Elysia rodando em ${serverUrl}`);
	console.log(`📚 Documentação Swagger disponível em ${serverUrl}/docs`);
	console.log(`🗂  Endpoint de textos disponível em ${serverUrl}/api/textos`);
};

Main().catch(console.error);
