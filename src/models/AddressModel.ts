import { z } from "zod";

const AddressModel = z.object({
	logradouro: z.string(),
	numero: z.number().optional(),
	bairro: z.string().optional(),
	cidade: z.string(),
});

type AddressModelType = z.infer<typeof AddressModel>;

export default AddressModel;
export type { AddressModelType };
