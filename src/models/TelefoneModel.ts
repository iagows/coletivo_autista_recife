import { z } from "zod";

const TelefoneModel = z.object({
	numero: z.number(),
	isWhatsapp: z.boolean(),
	isTelegram: z.boolean(),
});

type TelefoneType = z.infer<typeof TelefoneModel>;

export default TelefoneModel;
export type { TelefoneType };
