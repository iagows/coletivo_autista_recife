import { z } from "zod";
import NameModel from "./NameModel";

const ConselhoModel = z
	.object({
		estado: z.string().length(2).optional(),
		valor: z.string(),
	})
	.merge(NameModel);

type ConselhoModelType = z.infer<typeof ConselhoModel>;

export default ConselhoModel;
export type { ConselhoModelType };
