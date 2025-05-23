import type { profissionalType } from "@car/models";
import { PrismaClient } from "../../../generated/prisma";
import { createCRUDRoute } from "../crudFactory";

const prisma = new PrismaClient();

export const ProfissionalRoute = createCRUDRoute<profissionalType>(
	prisma,
	"profissional", // Nome do modelo no Prisma
	{
		prefix: "/profissional",
		selectFields: {
			id: true,
			nome: true,
			links: true,
			contatos: true,
			enderecos: true,
			pagamento: true,
			comentario: true,
			especialidades: true,
			isConsultorioEscola: true,
		},
		uniqueFields: ["nome"],
		errorMessages: {
			validation: "Profissional já está em uso",
			notFound: "Profissional não encontrado",
		},
		validateUnique: async (_) => {
			// Validação personalizada se necessário
		},
	},
);
