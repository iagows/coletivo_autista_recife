import { z } from "zod";
import { SimNaoEnum } from "./HelpTypes";

const TelefoneModel = z.object({
	numero: z.number(),
	whatsapp: z.enum(SimNaoEnum),
	telegram: z.enum(SimNaoEnum),
	ddd: z.number(),
});

type TelefoneModelType = z.infer<typeof TelefoneModel>;

export default TelefoneModel;
export type { TelefoneModelType };
