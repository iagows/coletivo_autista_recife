import type { ProfissionalModelType } from "../../models/ProfissionalModel";

export type CRM = {
	inscricao: number;
	estado: string;
	isProvisorio: boolean;
	isEstudanteEstrangeiro: boolean;
	isEstrangeiroProvisorio: boolean;
};

const isCrm = (text: string): boolean => {
	return text.trim().includes("CRM");
};

function crmParser(input: string): CRM | null {
	const tokens = input.split("-");

	const estado = tokens.pop();
	if (!estado || tokens.length < 1) {
		return null;
	}

	const result = tokens.reduce<CRM>(
		(acc, token) => {
			if (token === "300") {
				acc.isEstrangeiroProvisorio = true;
			} else if (token === "EME") {
				acc.isEstudanteEstrangeiro = true;
			} else if (/^\d{4,6}$/.test(token)) {
				acc.inscricao = Number.parseInt(token, 10);
			} else if (token === "P") {
				acc.isProvisorio = true;
			}
			return acc;
		},
		{
			estado,
			inscricao: 0,
			isProvisorio: false,
			isEstudanteEstrangeiro: false,
			isEstrangeiroProvisorio: false,
		},
	);

	return result; // Retorna null se não corresponder a nenhum formato
}

export const CRM_URL =
	"https://portal.cfm.org.br/api_rest_php/api/v1/medicos/buscar_medicos";

export const mountCrmBody = ({ crm, nome }: ProfissionalModelType) => {
	const isValidCrm = isCrm(crm);

	if (!isValidCrm) return null;

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
