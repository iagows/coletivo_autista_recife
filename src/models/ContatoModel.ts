import { z } from "zod";
import TelefoneModel from "./TelefoneModel";
import LinkModel from "./LinkModel";

const ContatoModel = z.object({
	telefone: TelefoneModel.array().optional().default([]),
	email: z.string().email().optional(),
	instagram: z.string().optional(),
	linktree: z.string().optional(),
	link: LinkModel.array().optional().default([]),
});

type ContatoModelType = z.infer<typeof ContatoModel>;

export default ContatoModel;
export type { ContatoModelType };
