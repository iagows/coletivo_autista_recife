import { z } from "zod";
import IdModel from "./IdModel";

export enum TextIds {
	QUEM_SOMOS = "68114938562ceb08fbf486d5",
	REGRAS_DESC = "681149c9562ceb08fbf486d6",
	INDICACOES_DESC = "681149e5562ceb08fbf486d7",
	ESCOLA = "681149fa562ceb08fbf486d8",
}

const TextoModel = z
	.object({
		texto: z.string(),
	})
	.merge(IdModel);

type TextoModelType = z.infer<typeof TextoModel>;

export default TextoModel;
export type { TextoModelType };
