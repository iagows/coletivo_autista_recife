import { z } from "zod";
import ContatoModel from "./ContatoModel";
import IdNomeModel, { type IdNomeModelType } from "./IdNomeModel";
import PagamentoModel from "./PagamentoModel";

export const ProfissionalModel = z.object({
	id: z.number(),
	profissional: z.string(),
	atualizado: z.string(),
	especialidade: z.number(),
	contato: ContatoModel.optional(),
	conselho: z.string().array().optional().default([]),
	pagamento: PagamentoModel.optional(),
	comentarios: z.string().optional(),
});

type ProfissionalModelType = z.infer<typeof ProfissionalModel>;

const IndicationData = z.object({
	especialidades: IdNomeModel.array(),
	planos: IdNomeModel.array().optional().default([]),
	profissionais: ProfissionalModel.array(),
});

type IndicationDataType = z.infer<typeof IndicationData>;

export type { IndicationDataType, ProfissionalModelType };
export default IndicationData;

export const getEspecialidade =
	(data: IndicationDataType) =>
	(id: number): IdNomeModelType =>
		data.especialidades.filter((e) => e.id === id)[0];

export const getPlano =
	(data: IndicationDataType) =>
	(id: number): IdNomeModelType =>
		data.planos.filter((e) => e.id === id)[0];
