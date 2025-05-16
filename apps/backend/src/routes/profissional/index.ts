import { profissionalDTO } from "@car/models";
import Elysia from "elysia";
import { PrismaClient } from "../../../generated/prisma";

const db = new PrismaClient();

export const ProfissionalRoute = new Elysia({ prefix: "/profissional" })
	.model({
		"profissional.conteudo": profissionalDTO,
	})
	.post(
		"/",
		async ({ body }) =>
			db.profissional.create({
				data: body,
				select: {
					nome: true,
					pagamento: true,
					links: true,
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
			body: "profissional.conteudo",
		},
	)
	.get("/", async () => db.profissional.findMany(), {
		body: "profissional.conteudo[]",
	});
