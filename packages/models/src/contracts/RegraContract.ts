import type { z } from "zod";
import { RegraModel } from "../models/RegraModel";

export const RegraContract = RegraModel.transform(({ _id, ...doc }) => ({
	...doc,
	id: _id?.toHexString(),
}));

export type RegraContractType = z.infer<typeof RegraContract>;
