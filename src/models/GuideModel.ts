import { z } from "zod";

const StepModel = z.object({
	id: z.number(),
	texto: z.string(),
});

type StepType = z.infer<typeof StepModel>;

const GuideModel = z.object({
	id: z.number(),
	titulo: z.string(),
	texto: z.string(),
	passos: StepModel.array(),
});

type GuideType = z.infer<typeof GuideModel>;

export type { StepType, GuideType };
export { StepModel, GuideModel };
