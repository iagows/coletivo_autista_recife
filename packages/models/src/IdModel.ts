import { ObjectId } from "mongodb";
import { z } from "zod";

const IdModel = z.object({
	_id: z.instanceof(ObjectId).or(z.string()).optional(),
});

type IdModelType = z.infer<typeof IdModel>;

export default IdModel;
export type { IdModelType };
