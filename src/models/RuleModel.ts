import { z } from "zod";

const RulesModel = z
	.object({
		id: z.number(),
		texto: z.string(),
		// atualizado: z.string(),
		detalhamento: z.string().optional().default(""),
	})
	.transform((data) => {
		// const [day, month, year] = data.atualizado.split("/").map(Number);
		// const atualizado = new Date(year, month - 1, day);
		return {
			id: data.id,
			texto: data.texto,
			// atualizado,
			detalhamento: data.detalhamento,
		};
	});

type RulesModelType = z.infer<typeof RulesModel>;

export default RulesModel;
export type { RulesModelType };
