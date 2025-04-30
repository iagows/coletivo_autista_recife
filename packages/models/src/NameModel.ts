import { z } from "zod";

const NameModel = z.object({
	nome: z.number(),
});

type NameModelType = z.infer<typeof NameModel>;

export default NameModel;
export type { NameModelType };
