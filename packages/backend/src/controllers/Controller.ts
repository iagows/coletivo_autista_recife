import Elysia from "elysia";
import type { z } from "zod";
import { zodToOpenAPI } from "../utils/zodToOpenApi";
import type { ApiDetail, ApiTags, IController } from "./IController";

export abstract class Controller<T> implements IController<T> {
	abstract getEndPoint(): string;
	abstract getApiDetail(): ApiDetail;
	abstract getAllData(): () => Promise<T[]>;
	abstract getResponse(): z.ZodTypeAny;
	abstract getTag(): ApiTags;

	getRoutes() {
		return new Elysia().get(this.getEndPoint(), this.getAllData(), {
			detail: {
				...this.getApiDetail(),
				responses: {
					200: {
						description: "Listagem bem-sucedida",
						content: {
							"application/json": {
								schema: zodToOpenAPI(this.getResponse()),
							},
						},
					},
					500: {
						description: "Erro no servidor",
						content: {
							"application/json": {
								schema: {
									type: "object",
									properties: {
										error: { type: "string" },
									},
								},
							},
						},
					},
				},
			},
		});
	}
}
