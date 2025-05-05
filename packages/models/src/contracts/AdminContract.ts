import type { z } from "zod";
import { AdminModel } from "../models/AdminModel";

const AdminContract = AdminModel.transform(({ _id, ...doc }) => ({
	...doc,
	id: _id?.toHexString(),
}));

type AdminContractType = z.infer<typeof AdminContract>;

export { AdminContract };
export type { AdminContractType };
