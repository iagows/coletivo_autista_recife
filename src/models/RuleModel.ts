import { z } from "zod";

const RulesModel = z.object({
	id: z.number(),
	texto: z.string(),
	atualizacao: z.string(),
	detalhamento: z.string().optional(),
});

type RulesType = z.infer<typeof RulesModel>;

export default RulesModel;
export type { RulesType };
