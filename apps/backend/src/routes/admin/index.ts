import type { adminType } from "@car/models";
import { PrismaClient } from "../../../generated/prisma";
import { createCRUDRoute } from "../crudFactory";

const prisma = new PrismaClient();

export const AdminRoute = createCRUDRoute<adminType>(
	prisma,
	"admin", // Nome do modelo no Prisma
	{
		prefix: "/admin",
		selectFields: {
			id: true,
			contatos: true,
			email: true,
			last_seen: true,
			nome: true,
		},
		uniqueFields: ["email", "nome"],
		errorMessages: {
			validation: "Nome/Email já está em uso",
			notFound: "Admin não encontrado",
		},
		validateUnique: async (_) => {
			// Validação personalizada se necessário
		},
	},
);
