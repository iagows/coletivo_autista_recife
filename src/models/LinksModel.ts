import { z } from "zod";
import GenericModel from "./GenericModel";

const LinksModel = GenericModel.extend({
	url: z.string(),
	titulo: z.string(),
});

type LinksModelType = z.infer<typeof LinksModel>;

export default LinksModel;
export type { LinksModelType };
