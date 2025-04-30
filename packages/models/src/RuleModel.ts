import { z } from "zod";
import IdModel from "./IdModel";

const RuleModel = z
	.object({
		texto: z.string(),
		detalhamento: z.string().nullable().optional().default(""),
	})
	.merge(IdModel);

type RuleModelType = z.infer<typeof RuleModel>;

export default RuleModel;
export type { RuleModelType };
