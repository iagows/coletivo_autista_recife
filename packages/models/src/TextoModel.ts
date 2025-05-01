import { z } from "zod";
import IdModel from "./IdModel";

export enum TextIds {
	QUEM_SOMOS = "68114938562ceb08fbf486d5",
	REGRAS_DESC = "681149c9562ceb08fbf486d6",
	INDICACOES_DESC = "681149e5562ceb08fbf486d7",
	ESCOLA = "681149fa562ceb08fbf486d8",
}

const TextoModelMongoDB = z
	.object({
		texto: z.string(),
	})
	.merge(IdModel);

type TextoModelTypeMongoDB = z.infer<typeof TextoModelMongoDB>;

///////////////

const TextoModelApi = TextoModelMongoDB.transform((doc) => ({
	...doc,
	id: doc._id?.toString(),
}));

type TextoModelTypeApi = z.infer<typeof TextoModelApi>;
export { TextoModelMongoDB, TextoModelApi };
export type { TextoModelTypeApi, TextoModelTypeMongoDB };
