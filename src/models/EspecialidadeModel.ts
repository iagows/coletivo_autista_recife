import type { z } from "zod";
import GenericModel from "./GenericModel";

const EspecialidadeModel = GenericModel;

type EspecialidadeModelType = z.infer<typeof EspecialidadeModel>;

export default EspecialidadeModel;
export type { EspecialidadeModelType };
