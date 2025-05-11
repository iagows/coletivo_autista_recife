import { consutorioEscolaDTO } from "@car/models";
import Elysia from "elysia";
import { PrismaClient } from "../../../generated/prisma";

const db = new PrismaClient();

export const EscolaRoute = new Elysia({ prefix: "/escola" })
	.model({
		"consultorioEscola.conteudo": consutorioEscolaDTO,
	})
	.post(
		"/",
		async ({ body }) =>
			db.consultorioEscola.create({
				data: body,
				select: {
					nome: true,
					preco: true,
					contatos: true,
					enderecos: true,
					comentario: true,
					especialidades: true,
				},
			}),
		{
			error: ({ code }) => {
				switch (code) {
					case "VALIDATION":
						return {
							error: "O nome deve ser único",
						};
				}
			},
			body: "consultorioEscola.conteudo",
		},
	)
	.get("/", async () => db.consultorioEscola.findMany(), {
		body: "consultorioEscola.conteudo[]",
	});
