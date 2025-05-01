import { z } from "zod";
import ConselhoModel from "./ConselhoModel";
import EnderecoModel from "./EnderecoModel";
import EspecialidadeModel from "./EspecialidadeModel";
import GenericModel from "./GenericModel";
import LinkModel from "./LinkModel";
import PlanoModel from "./PlanoModel";
import TelefoneModel from "./TelefoneModel";

const ProfissionalModelMongoDB = z
	.object({
		particular: z.boolean().optional().default(false),
		publico: z.boolean().optional().default(false),
		conselhos: z.array(ConselhoModel),
		comentario: z.string().optional().default(""),
		preco: z.number().optional(),
		planos: z.array(PlanoModel).optional().default([]),
		especialidades: z.array(EspecialidadeModel),
		enderecos: z.array(EnderecoModel),
		telefones: z.array(TelefoneModel),
		links: z.array(LinkModel),
	})
	.merge(GenericModel);

type ProfissionalModelTypeMongoDB = z.infer<typeof ProfissionalModelMongoDB>;

const ProfissionalModelApi = ProfissionalModelMongoDB.transform((doc) => ({
	...doc,
	id: doc._id?.toString(),
}));

type ProfissionalModelTypeApi = z.infer<typeof ProfissionalModelApi>;

export { ProfissionalModelApi, ProfissionalModelMongoDB };

export type { ProfissionalModelTypeApi, ProfissionalModelTypeMongoDB };
