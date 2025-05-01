import { z } from "zod";

const TelefoneModel = z.object({
	ddd: z.string().length(2),
	numero: z.string().min(8).max(9),
	whatsapp: z.boolean().optional().default(false),
	telegram: z.boolean().optional().default(false),
});

type TelefoneModelType = z.infer<typeof TelefoneModel>;

export default TelefoneModel;
export type { TelefoneModelType };
