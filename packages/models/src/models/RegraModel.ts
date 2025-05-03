import { z } from "zod";
import { IdModel } from "./IdModel";

const RegraModel = z
	.object({
		texto: z.string(),
		detalhamento: z.string().optional(),
	})
	.merge(IdModel);

type RegraModelType = z.infer<typeof RegraModel>;

export { RegraModel };
export type { RegraModelType };
