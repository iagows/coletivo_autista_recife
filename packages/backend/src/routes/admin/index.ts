import Elysia from "elysia";
import { adminDTO } from "@car/models";
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
					contatos: true,
					email: true,
					last_seen: true,
					nome: true,
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
