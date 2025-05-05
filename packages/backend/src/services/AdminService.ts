import { AdminContract, type AdminContractType } from "@car/models";
import { Inject } from "@car/utils";
import { z } from "zod";
import { AdminRepository } from "../repositories/AdminsRepository";
import type {
	DocZod,
	IMongoRepository,
} from "../repositories/IMongoRepository";
import { MongoValidationError } from "../utils/MongoValidationError";

const AdminsListResponse = z.array(AdminContract);

export class AdminService {
	@Inject(AdminRepository)
	private repository!: IMongoRepository<DocZod<AdminContractType>>;

	async getAllAdmins() {
		const admins = await this.repository.findAll();
		const result = AdminsListResponse.safeParse(admins);

		if (!result.success) {
			throw new MongoValidationError(result.error);
		}

		return result.data;
	}
}
