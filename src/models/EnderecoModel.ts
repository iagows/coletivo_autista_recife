import { z } from "zod";

const EnderecoModel = z
	.object({
		id: z.number(),
		cidade: z.string(),
		bairro: z.string(),
		logradouro: z.string(),
		complemento: z.string().optional().default(""),
		numero: z.number(),
		id_profissional: z.number(),
	})
	.transform((data) => ({
		id: data.id,
		cidade: data.cidade,
		bairro: data.bairro,
		logradouro: data.logradouro,
		complemento: data.complemento,
		numero: data.numero,
		idProfissional: data.id_profissional,
	}));

type EnderecoModelType = z.infer<typeof EnderecoModel>;

export default EnderecoModel;
export type { EnderecoModelType };
