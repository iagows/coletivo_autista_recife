import { Type } from "@sinclair/typebox";

export const idParam = Type.Object({
	id: Type.String(),
});

export const errorResponse = Type.Object({
	error: Type.String(),
});

export const successResponse = Type.Object({
	success: Type.Boolean(),
	message: Type.Optional(Type.String()),
});
