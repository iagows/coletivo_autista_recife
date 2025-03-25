import { z } from "zod";

const Plano = z.object({
	id: z.number(),
	nome: z.string(),
});

const PagamentoModel = z.object({
	particular: z.boolean(),
	publico: z.boolean().optional().default(false),
	planos: Plano.array().optional().default([]),
	preco: z.number().optional(),
});

type PagamentoModelType = z.infer<typeof PagamentoModel>;

export default PagamentoModel;

export type { PagamentoModelType };
