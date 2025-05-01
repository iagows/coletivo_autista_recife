import { type RegraModelTypeMongoDB, TextoModelMongoDB } from "@car/models";
import { Inject } from "@car/utils";
import { z } from "zod";
import { RegraService } from "../services/RegraService";
import { Controller } from "./Controller";
import type { ApiDetail, ApiTags } from "./IController";

const TextosListResponse = z.array(TextoModelMongoDB);

export class RegraController extends Controller<RegraModelTypeMongoDB> {
	@Inject(RegraService)
	private service!: RegraService;

	getEndPoint(): string {
		return "/regras";
	}

	getApiDetail(): ApiDetail {
		return {
			tags: ["Regras"],
			summary: "Listar todas as regras",
			description: "Retorna um array com todos as regras cadastradas",
		};
	}

	getAllData(): () => Promise<RegraModelTypeMongoDB[]> {
		return async () => await this.service.getAllRegras();
	}

	getResponse(): z.ZodTypeAny {
		return TextosListResponse;
	}

	getTag = (): ApiTags => ({
		name: "Regras",
		description: "Regras do grupo do WhatsApp",
	});
}
