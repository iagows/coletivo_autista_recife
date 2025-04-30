import { z } from "zod";
import NameModel from "./NameModel";

const LinkModel = z
	.object({
		url: z.string().nullable(),
		email: z.string().nullable(),
		texto: z.string().nullable(),
	})
	.merge(NameModel);

type LinkModelType = z.infer<typeof LinkModel>;

export default LinkModel;
export type { LinkModelType };
