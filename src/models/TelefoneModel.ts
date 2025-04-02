import { z } from "zod";
import { SimNaoEnum } from "./HelpTypes";

const TelefoneModel = z
	.object({
		id: z.number(),
		numero: z.number(),
		whatsapp: z.enum(SimNaoEnum),
		telegram: z.enum(SimNaoEnum),
	})
	.transform((data) => ({
		id: data.id,
		numero: data.numero,
		isWhatsapp: data.whatsapp === "s",
		isTelegram: data.telegram === "s",
	}));

type TelefoneType = z.infer<typeof TelefoneModel>;

export default TelefoneModel;
export type { TelefoneType };
