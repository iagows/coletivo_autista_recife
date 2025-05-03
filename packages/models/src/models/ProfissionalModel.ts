import { z } from "zod";
import ConselhoModel from "./ConselhoModel";
import EnderecoModel from "./EnderecoModel";
import EspecialidadeModel from "./EspecialidadeModel";
import LinkModel from "./LinkModel";
import PlanoModel from "./PlanoModel";
import TelefoneModel from "./TelefoneModel";
import { GenericModel } from "./GenericModel";

const ProfissionalModel = z
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

type ProfissionalModelType = z.infer<typeof ProfissionalModel>;

export { ProfissionalModel };

export type { ProfissionalModelType };
