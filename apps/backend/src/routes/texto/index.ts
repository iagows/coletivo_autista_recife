import type { textoType } from "@car/models";
import { PrismaClient } from "../../../generated/prisma";
import { createCRUDRoute } from "../crudFactory";

const prisma = new PrismaClient();

export const TextoRoute = createCRUDRoute<textoType>(
	prisma,
	"texto", // Nome do modelo no Prisma
	{
		prefix: "/texto",
		selectFields: {
			id: true,
			referencia: true,
			texto: true,
		},
		uniqueFields: ["referencia"],
		errorMessages: {
			validation: "Referência usada já está em uso",
			notFound: "Texto não encontrado",
		},
		validateUnique: async (_) => {
			// Validação personalizada se necessário
		},
	},
);
