import type { ProfissionalModelType } from "../../models/ProfissionalModel";
import { crmParser, isCrm } from "./crmParse";
import type { crmResultModelType } from "./crmResult";

const CRM_URL =
	"https://portal.cfm.org.br/api_rest_php/api/v1/medicos/buscar_medicos";

const mountCrmBody = ({ crm, nome }: ProfissionalModelType) => {
	const data = crmParser(crm);
	if (data) {
		const { estado, inscricao } = data;
		return [
			{
				useCaptchav2: false,
				medico: {
					nome,
					ufMedico: estado,
					crmMedico: inscricao,
					municipioMedico: "",
					tipoInscricaoMedico: "",
					situacaoMedico: "",
					detalheSituacaoMedico: "",
					especialidadeMedico: "",
					areaAtuacaoMedico: "",
				},
				page: 1,
				pageNumber: 1,
				pageSize: 10,
			},
		];
	}
	return [];
};

export const getDoc = async (
	prof: ProfissionalModelType,
): Promise<crmResultModelType[] | null> => {
	const url = CRM_URL;

	const isValidCrm = isCrm(prof.crm);
	const body = mountCrmBody(prof);
	const response = await fetch(url);

	console.log({ response });

	return null;
};
