import { z } from "zod";
import { GenericModel } from "./GenericModel";

const AdminModel = z
	.object({
		email: z.string().email(),
		"last-seen": z.date(),
	})
	.merge(GenericModel);

type AdminModelType = z.infer<typeof AdminModel>;

export { AdminModel };
export type { AdminModelType };
