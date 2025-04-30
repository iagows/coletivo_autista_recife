import { z } from "zod";

export function zodToOpenAPI(schema: z.ZodTypeAny): Record<string, unknown> {
	if (schema instanceof z.ZodString) return { type: "string" };
	if (schema instanceof z.ZodNumber) return { type: "number" };
	if (schema instanceof z.ZodBoolean) return { type: "boolean" };
	if (schema instanceof z.ZodOptional)
		return zodToOpenAPI(schema._def.innerType);
	if (schema instanceof z.ZodObject) {
		const shape = schema.shape;
		const properties: Record<string, Record<string, unknown>> = {};
		for (const key in shape) {
			properties[key] = zodToOpenAPI(shape[key]);
		}
		return { type: "object", properties };
	}
	if (schema instanceof z.ZodArray) {
		return { type: "array", items: zodToOpenAPI(schema.element) };
	}
	return {};
}
