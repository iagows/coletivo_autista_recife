import { z } from "zod";

const LinksModel = z.object({
	titulo: z.string(),
	url: z.string(),
	texto: z.string(),
});

type LinksModelType = z.infer<typeof LinksModel>;

export default LinksModel;
export type { LinksModelType };
