import { z } from "zod";

const RulesModel = z.object({
	id: z.number(),
	texto: z.string(),
	detalhamento: z.string().optional().default(""),
});

type RulesModelType = z.infer<typeof RulesModel>;

export default RulesModel;
export type { RulesModelType };
