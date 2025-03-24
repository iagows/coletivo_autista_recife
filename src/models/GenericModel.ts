import { z } from "zod";

const GenericModel = z.object({
	id: z.number(),
	texto: z.string(),
});

type GenericModelType = z.infer<typeof GenericModel>;

export default GenericModel;
export type { GenericModelType };
