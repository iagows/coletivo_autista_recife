import { z } from "zod";

const LinkModel = z
	.object({
		id: z.number(),
		url: z.string(),
		email: z.string().nullable().default(""),
		id_profissional: z.number(),
		texto: z.string().optional().nullable(),
	})
	.transform((data) => ({
		id: data.id,
		url: data.url,
		isEmail: data.email === "s",
		idProfissional: data.id_profissional,
		texto: data.texto,
	}));

type LinkModelType = z.infer<typeof LinkModel>;

export default LinkModel;
export type { LinkModelType };
