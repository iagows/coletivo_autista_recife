import { Type } from "@sinclair/typebox";

export const idParam = Type.Object({
	id: Type.String(),
});

export const errorResponse = Type.Object({
	error: Type.String(),
});

export const swaggerModels = {
	error: errorResponse,
	idParam: idParam,
	// Adicionar outros modelos conforme necessário
};
