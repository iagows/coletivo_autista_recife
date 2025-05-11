import swagger from "@elysiajs/swagger";
import Elysia from "elysia";
import { PrismaClient } from "../generated/prisma";
import { BODIES, SiteModels } from "./prisma/models";
import { EnvVars } from "./utils/EnvVars";

const Main = async () => {
	const db = new PrismaClient();

	const app = new Elysia()
		.use(SiteModels)
		.post(
			"/texto",
			async ({ body }) =>
				db.texto.create({
					data: body,
					select: {
						id: true,
						texto: true,
					},
				}),

			{
				error: ({ code }) => {
					switch (code) {
						case "VALIDATION":
							return {
								error: "O texto deve ser único",
							};
					}
				},
				body: BODIES.TEXTO,
			},
		)
		.get("/texto", async () => db.texto.findMany(), {
			error: ({ code }) => {
				return `select error ${code}`;
			},
			body: BODIES.TEXTO,
		})

		.listen(EnvVars.port);

	if (EnvVars.serverMode === "development") {
		app.use(swagger());
	}

	// Logs de inicialização
	const serverUrl = `http://${app.server?.hostname}:${app.server?.port}`;
	console.log(`🦊 Servidor Elysia rodando em ${serverUrl}`);
};

Main().catch(console.error);
