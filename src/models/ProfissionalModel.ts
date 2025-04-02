import { z } from "zod";
import { SimNaoEnum } from "./HelpTypes";

const ProfissionalModel = z
	.object({
		id: z.number(),
		nome: z.string(),
		atualizado: z.string(),
		especialidades: z.string(),
		conselhos: z.string(),
		contato: z.string().default(""),
		endereco: z.string().default(""),
		particular: z.enum(SimNaoEnum),
		publico: z.enum(SimNaoEnum),
		comentario: z.string(),
	})
	.transform((data) => {
		const [day, month, year] = data.atualizado.split("/").map(Number);
		const atualizacao = new Date(year, month - 1, day);

		return {
			id: data.id,
			nome: data.nome,
			atualizacao,
			especialidades: data.especialidades
				.split(",")
				.map((n) => Number.parseInt(n)),
			conselhos: data.conselhos.split(",").map((n) => Number.parseInt(n)),
			contato: data.contato.split(",").map((n) => Number.parseInt(n)),
			endereco: data.endereco.split(",").map((n) => Number.parseInt(n)),
			particular: data.particular === "s",
			publico: data.publico === "s",
			comentario: data.comentario,
		};
	});

type ProfissionalModelType = z.infer<typeof ProfissionalModel>;

export default ProfissionalModel;
export type { ProfissionalModelType };
