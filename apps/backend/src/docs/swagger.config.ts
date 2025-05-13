import { swagger } from "@elysiajs/swagger";
import type { Elysia } from "elysia";

export const setupSwagger = (app: Elysia) =>
	app.use(
		swagger({
			documentation: {
				info: {
					title: "API do Coletivo de Autistas de recife",
					version: "1.0.0",
					description: "Documentação completa da API",
				},
				tags: [
					{ name: "Regras", description: "Endpoints relacionados a regras" },
					// { name: "Autenticação", description: "Endpoints de login e acesso" },
				],
				components: {
					securitySchemes: {
						bearerAuth: {
							type: "http",
							scheme: "bearer",
							bearerFormat: "JWT",
						},
					},
				},
			},
			exclude: ["/"],
			path: "/docs",
			theme: "dark",
		}),
	);
