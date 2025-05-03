import type { z } from "zod";
import { TextoModel } from "../models/TextoModel";

export const TextoContract = TextoModel.transform(({ _id, ...doc }) => ({
	...doc,
	id: _id?.toHexString(),
}));

export type TextoContractType = z.infer<typeof TextoContract>;
