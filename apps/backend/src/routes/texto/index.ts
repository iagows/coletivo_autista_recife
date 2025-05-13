import { textoDTO } from "@car/models";
import Elysia from "elysia";
import { PrismaClient } from "../../../generated/prisma";

const db = new PrismaClient();

export const TextoRoute = new Elysia({ prefix: "/texto" })
	.model({
		"texto.conteudo": textoDTO,
	})
	.post(
		"/",
		async ({ body }) =>
			db.texto.create({
				data: body,
				select: {
					texto: true,
				},
			}),
		{
			error: ({ code }) => {
				switch (code) {
					case "VALIDATION":
						return {
							error: "Nome e email devem ser únicos",
						};
				}
			},
			body: "texto.conteudo",
		},
	)
	.get("/", async () => db.texto.findMany(), {
		body: "texto.conteudo[]",
	});
