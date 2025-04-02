import { z } from "zod";

const ContatoModel = z
	.object({
		id: z.number(),
		telefones: z.string().default(""),
		email: z.string().default(""),
		instagram: z.string().default(""),
		link_tree: z.string().default(""),
		enderecos: z.string().default(""),
	})
	.transform((data) => ({
		id: data.id,
		telefones: data.telefones.split(",").map((t) => Number.parseInt(t)),
		email: data.email,
		instagram: data.instagram,
		linkTree: data.link_tree,
		enderecos: data.enderecos.split(",").map((t) => Number.parseInt(t)),
	}));

type ContatoModelType = z.infer<typeof ContatoModel>;

export default ContatoModel;
export type { ContatoModelType };
