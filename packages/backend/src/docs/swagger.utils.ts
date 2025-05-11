export const defaultResponses = {
	400: {
		description: "Requisição inválida",
		content: {
			"application/json": {
				schema: { $ref: "#/components/schemas/ErrorResponse" },
			},
		},
	},
	401: {
		description: "Não autorizado",
	},
	500: {
		description: "Erro interno do servidor",
	},
};

export const createRouteDocs = (options: {
	tags?: string[];
	description?: string;
	responses?: Record<string, Record<string, unknown>>;
	security?: Record<string, unknown>[];
}) => ({
	detail: {
		tags: options.tags || [],
		description: options.description || "",
		responses: {
			...defaultResponses,
			...options.responses,
		},
		security: options.security || [],
	},
});
