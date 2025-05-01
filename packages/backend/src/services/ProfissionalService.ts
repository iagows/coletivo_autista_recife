import {
	ProfissionalModelMongoDB,
	type ProfissionalModelTypeMongoDB,
} from "@car/models";
import { Inject } from "@car/utils";
import { z } from "zod";
import type {
	DocZod,
	IMongoRepository,
} from "../repositories/IMongoRepository";
import { ProfissionalRepository } from "../repositories/ProfissionalRepository";

const ProfissionaisListResponse = z.array(ProfissionalModelMongoDB);

export class ProfissionalService {
	@Inject(ProfissionalRepository)
	private repository!: IMongoRepository<DocZod<ProfissionalModelTypeMongoDB>>;

	async getAllProfissionais() {
		const profissionais = await this.repository.findAll();
		const result = ProfissionaisListResponse.safeParse(profissionais);

		if (!result.success) {
			throw new Error(`Formato de dados inválido: ${result.error}`);
		}

		return result.data;
	}
}
