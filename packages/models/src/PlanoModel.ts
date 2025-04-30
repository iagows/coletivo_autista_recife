import type { z } from "zod";
import NameModel from "./NameModel";

const PlanoModel = NameModel;

type PlanoModelType = z.infer<typeof PlanoModel>;

export default PlanoModel;
export type { PlanoModelType };
