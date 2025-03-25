import { z } from "zod";

const IdNomeModel = z.object({
	id: z.number(),
	nome: z.string(),
});

type IdNomeModelType = z.infer<typeof IdNomeModel>;

export default IdNomeModel;

export type { IdNomeModelType };
