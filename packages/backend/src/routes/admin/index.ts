import { adminDTO } from "@car/models";
import Elysia from "elysia";
import { PrismaClient } from "../../../generated/prisma";

const db = new PrismaClient();

export const AdminRoute = new Elysia({ prefix: "/admin" })
	.model({
		"admin.conteudo": adminDTO,
	})
	.post(
		"/",
		async ({ body }) =>
			db.admin.create({
				data: body,
				select: {
					nome: true,
					email: true,
					contatos: true,
					last_seen: true,
				},
			}),
		{
			error: ({ code }) => {
				switch (code) {
					case "VALIDATION":
						return {
							error: "O email deve ser único",
						};
				}
			},
			body: "admin.conteudo",
		},
	)
	.get("/", async () => db.admin.findMany(), {
		body: "admin.conteudo[]",
	});
