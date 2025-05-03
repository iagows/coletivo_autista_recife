import { RegraModel, type RegraModelType } from "@car/models";
import { Inject } from "@car/utils";
import { z } from "zod";
import type {
	DocZod,
	IMongoRepository,
} from "../repositories/IMongoRepository";
import { RegraRepository } from "../repositories/RegraRepository";
import { MongoValidationError } from "../utils/MongoValidationError";

const RegrasListResponse = z.array(RegraModel);

export class RegraService {
	@Inject(RegraRepository)
	private repository!: IMongoRepository<DocZod<RegraModelType>>;

	async getAllRegras() {
		const textos = await this.repository.findAll();
		const result = RegrasListResponse.safeParse(textos);

		if (!result.success) {
			throw new MongoValidationError(result.error);
		}

		return result.data;
	}
}
