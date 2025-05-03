import { ProfissionalModel, type ProfissionalModelType } from "@car/models";
import { Inject } from "@car/utils";
import { z } from "zod";
import { ProfissionalService } from "../services/ProfissionalService";
import { Controller } from "./Controller";
import type { ApiDetail, ApiTags } from "./IController";

const ProfissionalListModel = z.array(ProfissionalModel);

export class ProfissionalController extends Controller<ProfissionalModelType> {
	@Inject(ProfissionalService)
	private service!: ProfissionalService;

	getEndPoint(): string {
		return "/profissionais";
	}

	getApiDetail(): ApiDetail {
		return {
			tags: ["Profissionais"],
			summary: "Listar todos os profissionais",
			description: "Retorna um array com todos os Profissionais cadastrados",
		};
	}

	getAllData(): () => Promise<ProfissionalModelType[]> {
		return async () => await this.service.getAllProfissionais();
	}

	getResponse(): z.ZodTypeAny {
		return ProfissionalListModel;
	}

	getTag = (): ApiTags => ({
		name: "Profissionais",
		description: "Profissionais indicados por nós",
	});
}
