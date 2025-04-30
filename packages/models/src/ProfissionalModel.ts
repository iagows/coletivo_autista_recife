import { z } from "zod";
import IdModel from "./IdModel";
import GenericModel from "./GenericModel";
import { SimNaoEnum } from "./HelpTypes";
import ConselhoModel from "./ConselhoModel";
import PlanoModel from "./PlanoModel";
import EspecialidadeModel from "./EspecialidadeModel";
import EnderecoModel from "./EnderecoModel";
import TelefoneModel from "./TelefoneModel";
import LinkModel from "./LinkModel";

const ProfissionalModel = z
	.object({
		publico: z.enum(SimNaoEnum),
		particular: z.enum(SimNaoEnum),
		conselhos: z.array(ConselhoModel),
		comentario: z.string().nullable().default(""),
		preco: z.number().optional().nullable(),
		planos: z.array(PlanoModel),
		especialidades: z.array(EspecialidadeModel),
		enderecos: z.array(EnderecoModel),
		telefones: z.array(TelefoneModel),
		links: z.array(LinkModel),
	})
	.merge(GenericModel);

type ProfissionalModelType = z.infer<typeof ProfissionalModel>;

export default ProfissionalModel;
export type { ProfissionalModelType };
