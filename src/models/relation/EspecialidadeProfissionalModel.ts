import { z } from "zod";

const EspecialidadeProfissionalModel = z.object({
	id: z.number(),
	id_profissional: z.number(),
	id_especialidade: z.number(),
});

type EspecialidadeProfissionalModelType = z.infer<
	typeof EspecialidadeProfissionalModel
>;

export default EspecialidadeProfissionalModel;
export type { EspecialidadeProfissionalModelType };
