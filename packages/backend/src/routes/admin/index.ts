import Elysia from "elysia";
import { BODIES } from "../../prisma/models";
import { adminDTO } from "@car/models";
import { PrismaClient } from "../../../generated/prisma";

const AdminModel = new Elysia().model({
	[BODIES.ADMIN]: adminDTO,
});

const db = new PrismaClient();

const AdminRoute = new Elysia({ prefix: "/admins" }).model(adminDTO).post(
	"/",
	async ({ body }) =>
		db.admin.create({
			data: body,
			select: {
				id: true,
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
						error: "O texto deve ser único",
					};
			}
		},
		body: "texto.conteudo",
	},
);
