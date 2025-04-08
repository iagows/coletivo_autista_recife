import { z } from "zod";

export enum TextIds {
	QUEM_SOMOS = 1,
	REGRAS_DESC = 2,
	INDICACOES_DESC = 3,
	ESCOLA = 4,
}

const TextoModel = z.object({
	id: z.number(),
	referencia: z.string(), // somente para obrigar a existir
	texto: z.string(),
});

type TextoModelType = z.infer<typeof TextoModel>;

export default TextoModel;
export type { TextoModelType };
