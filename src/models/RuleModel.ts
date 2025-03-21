import { z } from "zod";
import GenericModel from "./GenericModel";

const RuleModel = GenericModel.extend({
	detalhamento: z.string(),
});

type RuleType = z.infer<typeof RuleModel>;

export default RuleModel;
export type { RuleType };
