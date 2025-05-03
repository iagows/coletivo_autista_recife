import { TextoModel, type TextoModelType } from "@car/models";
import { Inject } from "@car/utils";
import { z } from "zod";
import { TextoService } from "../services/TextoService";
import { Controller } from "./Controller";
import type { ApiDetail, ApiTags } from "./IController";

const TextosListResponse = z.array(TextoModel);

export class TextoController extends Controller<TextoModelType> {
	@Inject(TextoService)
	private service!: TextoService;

	getEndPoint(): string {
		return "/textos";
	}

	getApiDetail(): ApiDetail {
		return {
			tags: ["Textos"],
			summary: "Listar todos os textos",
			description: "Retorna um array com todos os textos cadastrados",
		};
	}

	getAllData(): () => Promise<TextoModelType[]> {
		return async () => await this.service.getAllTextos();
	}

	getResponse(): z.ZodTypeAny {
		return TextosListResponse;
	}

	getTag = (): ApiTags => ({
		name: "Textos",
		description: "Textos exibidos no site",
	});
}
