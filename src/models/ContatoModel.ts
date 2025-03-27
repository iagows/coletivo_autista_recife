import { z } from "zod";
import AddressModel from "./AddressModel";
import LinkModel from "./LinkModel";
import TelefoneModel from "./TelefoneModel";

const ContatoModel = z.object({
	telefone: TelefoneModel.array().optional().default([]),
	email: z.string().email().optional(),
	instagram: z.string().optional(),
	linktree: z.string().optional(),
	link: LinkModel.array().optional().default([]),
	endereco: AddressModel.array().optional(),
});

type ContatoModelType = z.infer<typeof ContatoModel>;

export default ContatoModel;
export type { ContatoModelType };
