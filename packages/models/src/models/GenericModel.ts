import type { z } from "zod";
import { IdModel } from "./IdModel";
import NameModel from "./NameModel";

const GenericModel = IdModel.merge(NameModel);

type GenericModelType = z.infer<typeof GenericModel>;

export { GenericModel };

export type { GenericModelType };
