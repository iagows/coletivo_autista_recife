import { z } from "zod";
import GenericModel from "./GenericModel";

const LinkModel = GenericModel.extend({
	url: z.string(),
});

type LinksModelType = z.infer<typeof LinkModel>;

export default LinkModel;
export type { LinksModelType };
