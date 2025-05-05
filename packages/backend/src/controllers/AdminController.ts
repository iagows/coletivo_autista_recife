import {
	type AdminContractType,
	AdminModel,
	type TextoContractType,
	TextoModel,
} from "@car/models";
import { Inject } from "@car/utils";
import { z } from "zod";
import { TextoService } from "../services/TextoService";
import { Controller } from "./Controller";
import type { ApiDetail, ApiTags } from "./IController";
import { AdminService } from "../services/AdminService";

const AdminsListResponse = z.array(AdminModel);

export class AdminController extends Controller<AdminContractType> {
	@Inject(AdminService)
	private service!: AdminService;

	getEndPoint(): string {
		return "/admins";
	}

	getApiDetail(): ApiDetail {
		return {
			tags: ["Admins"],
			summary: "Listar todos os administradores",
			description: "Retorna um array com todos os administradores cadastrados",
		};
	}

	getAllData(): () => Promise<AdminContractType[]> {
		return async () => await this.service.getAllAdmins();
	}

	getResponse(): z.ZodTypeAny {
		return AdminsListResponse;
	}

	getTag = (): ApiTags => ({
		name: "Admins",
		description: "Admins exibidos no site",
	});
}
