import type { z } from "zod";
import GenericModel from "./GenericModel";

const PlanoModel = GenericModel;

type PlanoModelType = z.infer<typeof PlanoModel>;

export default PlanoModel;
export type { PlanoModelType };
