import { z } from "zod";
import IdModel from "./IdModel";

const RegraModelMongoDB = z
	.object({
		texto: z.string(),
		detalhamento: z.string().nullable().optional().default(""),
	})
	.merge(IdModel);

type RegraModelTypeMongoDB = z.infer<typeof RegraModelMongoDB>;

///////

const RegraModelApi = RegraModelMongoDB.transform((doc) => ({
	...doc,
	id: doc._id,
}));

type RegraModelTypeApi = z.infer<typeof RegraModelApi>;

export { RegraModelApi, RegraModelMongoDB };

export type { RegraModelTypeApi, RegraModelTypeMongoDB };
