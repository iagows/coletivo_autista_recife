import { z } from "zod";
import GenericModel from "./GenericModel";

const GuideModel = GenericModel.extend({
	titulo: z.string(),
	passos: GenericModel.array(),
});

type GuideType = z.infer<typeof GuideModel>;

export type { GuideType };
export { GuideModel };
