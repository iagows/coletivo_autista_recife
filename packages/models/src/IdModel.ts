import { z } from "zod";

const IdModel = z.object({
	_id: z.string(),
});

type IdModelType = z.infer<typeof IdModel>;

export default IdModel;
export type { IdModelType };
