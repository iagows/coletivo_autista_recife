import type { regraType } from "@car/models";
import { PrismaClient } from "../../../generated/prisma";
import { createCRUDRoute } from "../crudFactory";

const prisma = new PrismaClient();

export const RegraRoute = createCRUDRoute<regraType>(
	prisma,
	"regra", // Nome do modelo no Prisma
	{
		prefix: "/regra",
		selectFields: {
			id: true,
			descricao: true,
			texto: true,
		},
		uniqueFields: ["texto"],
		errorMessages: {
			validation: "Regra usada já está em uso",
			notFound: "Regra não encontrada",
		},
		validateUnique: async (_) => {
			// Validação personalizada se necessário
		},
	},
);
