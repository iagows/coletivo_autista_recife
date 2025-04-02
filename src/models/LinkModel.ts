import { number, string, z } from "zod";

const LinkModel = z.object({
	id: number(),
	url: string(),
});

type LinkModelType = z.infer<typeof LinkModel>;

export default LinkModel;
export type { LinkModelType };
