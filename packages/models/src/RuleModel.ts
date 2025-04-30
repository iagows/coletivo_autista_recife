import { z } from "zod";
import IdModel from "./IdModel";

const RulesModel = z
	.object({
		texto: z.string(),
		detalhamento: z.string().nullable().optional().default(""),
	})
	.merge(IdModel);

type RulesModelType = z.infer<typeof RulesModel>;

export default RulesModel;
export type { RulesModelType };
