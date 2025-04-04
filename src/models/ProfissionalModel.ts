import { z } from "zod";

const ProfissionalModel = z
	.object({
		id: z.number(),
		nome: z.string(),
		publico: z.string(),
		particular: z.string(),
		comentario: z.string(),
		crm: z.string().optional().default(""),
		rqe: z.string().optional().default(""),
		preco: z.number().optional().nullable(),
	})
	.transform((data) => ({
		id: data.id,
		nome: data.nome,
		isParticular: data.particular === "s",
		isPublico: data.publico === "s",
		crm: data.crm,
		rqe: data.rqe,
		comentario: data.comentario,
		preco: data.preco ?? undefined,
	}));

type ProfissionalModelType = z.infer<typeof ProfissionalModel>;

export default ProfissionalModel;
export type { ProfissionalModelType };
