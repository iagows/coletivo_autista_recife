import type { z } from "zod";
import NameModel from "./NameModel";

const EspecialidadeModel = NameModel;

type EspecialidadeModelType = z.infer<typeof EspecialidadeModel>;

export default EspecialidadeModel;
export type { EspecialidadeModelType };
