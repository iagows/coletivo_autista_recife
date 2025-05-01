import type { ZodError } from "zod";
import { EnvVars } from "./EnvVars";

export class MongoValidationError extends Error {
	constructor(error: ZodError) {
		const isDev = EnvVars.serverMode === "development";
		const message = isDev
			? `Formato de dados inválido: ${JSON.stringify(error, null, 2)}`
			: "Formato de dados inválido";

		super(message);

		if (isDev) {
			console.error("Erro detalhado:", error);
		}
	}
}
