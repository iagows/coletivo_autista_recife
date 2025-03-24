import { z } from "zod";

const Especialidade = z.object({
	id: z.number(),
	nome: z.string(),
});

type ExpecialidadeType = z.infer<typeof Especialidade>;

export const Telefone = z.object({
	numero: z.number(),
	isWhatsapp: z.boolean(),
});

type TelefoneType = z.infer<typeof Telefone>;

const Link = z.object({
	nome: z.string(),
	url: z.string(),
});

export const Contato = z.object({
	telefone: Telefone.array().optional().default([]),
	email: z.string().email().optional(),
	link: Link.array().optional().default([]),
});

type ContatoType = z.infer<typeof Contato>;

const Plano = z.object({
	id: z.number(),
	nome: z.string(),
});

const Pagamento = z.object({
	particular: z.boolean(),
	publico: z.boolean(),
	planos: Plano.array().optional().default([]),
	preco: z.number().optional(),
});

const IndicationModel = z.object({
	id: z.number(),
	profissional: z.string(),
	especialidade: z.number(),
	contato: Contato.optional(),
	conselho: z.string().array().optional().default([]),
	local: z.string().optional(),
	pagamento: Pagamento.optional(),
	comentarios: z.string().optional(),
});

const IndicationData = z.object({
	especialidades: Especialidade.array(),
	profissionais: IndicationModel.array(),
});

type IndicationDataType = z.infer<typeof IndicationData>;

export type { IndicationDataType, ContatoType, TelefoneType };
export default IndicationData;

export const getEspecialidade =
	(data: IndicationDataType) =>
	(id: number): ExpecialidadeType =>
		data.especialidades.filter((e) => e.id === id)[0];
