import { ProfissionalModel, type ProfissionalModelType } from "@car/models";
import { Inject } from "@car/utils";
import { z } from "zod";
import type {
	DocZod,
	IMongoRepository,
} from "../repositories/IMongoRepository";
import { ProfissionalRepository } from "../repositories/ProfissionalRepository";
import { MongoValidationError } from "../utils/MongoValidationError";

const ProfissionaisListResponse = z.array(ProfissionalModel);

export class ProfissionalService {
	@Inject(ProfissionalRepository)
	private repository!: IMongoRepository<DocZod<ProfissionalModelType>>;

	async getAllProfissionais() {
		const profissionais = await this.repository.findAll();
		const result = ProfissionaisListResponse.safeParse(profissionais);

		if (!result.success) {
			throw new MongoValidationError(result.error);
		}

		return result.data;
	}
}
