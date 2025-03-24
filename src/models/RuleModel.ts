import { z } from "zod";
import GenericModel from "./GenericModel";

const RuleModel = GenericModel.extend({
	detalhamento: z.string().optional(),
});

const RulesModel = z.object({
	texto: z.string(),
	titulo: z.string(),
	atualizacao: z.string(),
	regras: RuleModel.array(),
});

type RulesType = z.infer<typeof RulesModel>;

export default RulesModel;
export type { RulesType };
