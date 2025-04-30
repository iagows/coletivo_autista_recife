import { z } from "zod";

const EnderecoModel = z.object({
	cidade: z.string(),
	numero: z.number(),
	bairro: z.string(),
	logradouro: z.string(),
	complemento: z.string().optional().default(""),
});

type EnderecoModelType = z.infer<typeof EnderecoModel>;

export default EnderecoModel;
export type { EnderecoModelType };
