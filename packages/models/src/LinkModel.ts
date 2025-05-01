import { z } from "zod";

const LinkModel = z.object({
	url: z.string(),
});

type LinkModelType = z.infer<typeof LinkModel>;

export default LinkModel;
export type { LinkModelType };
