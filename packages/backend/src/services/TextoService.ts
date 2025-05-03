import { TextoModel, type TextoModelType } from "@car/models";
import { Inject } from "@car/utils";
import { z } from "zod";
import type {
	DocZod,
	IMongoRepository,
} from "../repositories/IMongoRepository";
import { TextoRepository } from "../repositories/TextoRepository";
import { MongoValidationError } from "../utils/MongoValidationError";

const TextosListResponse = z.array(TextoModel);

export class TextoService {
	@Inject(TextoRepository)
	private repository!: IMongoRepository<DocZod<TextoModelType>>;

	async getAllTextos() {
		const textos = await this.repository.findAll();
		const result = TextosListResponse.safeParse(textos);

		if (!result.success) {
			throw new MongoValidationError(result.error);
		}

		return result.data;
	}
}
