import type { z } from "zod";
import { ProfissionalModel } from "../models/ProfissionalModel";

export const ProfissionalContract = ProfissionalModel.transform(
	({ _id, ...doc }) => ({
		...doc,
		id: _id?.toHexString(),
	}),
);

export type ProfissionalContractType = z.infer<typeof ProfissionalContract>;
