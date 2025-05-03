import { ObjectId } from "mongodb";
import { z } from "zod";

const IdModel = z.object({
	_id: z.instanceof(ObjectId),
});

type IdModelType = z.infer<typeof IdModel>;

export { IdModel };
export type { IdModelType };
