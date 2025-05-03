import { RegraContract, type RegraContractType } from "@car/models";
import { Inject } from "@car/utils";
import { z } from "zod";
import type {
	DocZod,
	IMongoRepository,
} from "../repositories/IMongoRepository";
import { RegraRepository } from "../repositories/RegraRepository";
import { MongoValidationError } from "../utils/MongoValidationError";

const RegrasListResponse = z.array(RegraContract);

export class RegraService {
	@Inject(RegraRepository)
	private repository!: IMongoRepository<DocZod<RegraContractType>>;

	async getAllRegras() {
		const textos = await this.repository.findAll();
		const result = RegrasListResponse.safeParse(textos);

		if (!result.success) {
			throw new MongoValidationError(result.error);
		}

		return result.data;
	}
}
