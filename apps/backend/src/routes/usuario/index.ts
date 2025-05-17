import type { UsuarioType } from "@car/models";
import { PrismaClient } from "../../../generated/prisma";
import { createCRUDRoute } from "../crudFactory";

const prisma = new PrismaClient();

export const UserRoute = createCRUDRoute<UsuarioType>(
	prisma,
	"usuario", // Nome do modelo no Prisma
	{
		prefix: "/usuario",
		selectFields: {
			id: true,
			cidade: true,
			contato: true,
			email: true,
			idade_diagnostico: true,
			motivacao: true,
			nascimento: true,
			nome: true,
			pronome: true,
			relacao: true,
			senha: true,
		},
		uniqueFields: ["email"],
		errorMessages: {
			validation: "Email já está em uso",
			notFound: "Usuário não encontrado",
		},
		validateUnique: async (_) => {
			// Validação personalizada se necessário
		},
	},
);
