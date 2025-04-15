export type CRM = {
	inscricao: number;
	estado: string;
	isProvisorio: boolean;
	isEstudanteEstrangeiro: boolean;
	isEstrangeiroProvisorio: boolean;
};

export const isCrm = (text: string): boolean => {
	return text.trim().includes("CRM");
};

export const crmParser = (input: string): CRM | null => {
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
};
