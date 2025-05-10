import { z } from "zod";

const PlanoProfissionalModel = z.object({
	id: z.number(),
	id_profissional: z.number(),
	id_plano: z.number(),
});

type PlanoProfissionalModelType = z.infer<typeof PlanoProfissionalModel>;

export default PlanoProfissionalModel;
export type { PlanoProfissionalModelType };
