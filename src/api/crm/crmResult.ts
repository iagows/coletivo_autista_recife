import { z } from "zod";

const crmResultModel = z
	.object({
		status: z.string(),
		dados: z.array(
			z
				.object({
					COUNT: z.string(),
					SG_UF: z.string(),
					NU_CRM: z.string(),
					NU_CRM_NATURAL: z.string(),
					NM_MEDICO: z.string(),
					COD_SITUACAO: z.string(),
					NM_SOCIAL: z.any(),
					DT_INSCRICAO: z.string(),
					IN_TIPO_INSCRICAO: z.string(),
					TIPO_INSCRICAO: z.string(),
					SITUACAO: z.string(),
					ESPECIALIDADE: z.string(),
					PRIM_INSCRICAO_UF: z.string(),
					PERIODO_I: z.any(),
					PERIODO_F: z.any(),
					OBS_INTERDICAO: z.any(),
					NM_INSTITUICAO_GRADUACAO: z.string(),
					DT_GRADUACAO: z.string(),
					ID_TIPO_FORMACAO: z.string(),
					NM_FACULDADE_ESTRANGEIRA_GRADUACAO: z.any(),
					HAS_POS_GRADUACAO: z.string(),
					RNUM: z.string(),
				})
				.transform((data) => ({
					count: Number.parseInt(data.COUNT),
					uf: data.SG_UF,
					crm: Number.parseInt(data.NU_CRM),
					crmNatural: Number.parseInt(data.NU_CRM_NATURAL),
					medico: data.NM_MEDICO,
					codigoSituacao: data.COD_SITUACAO,
					especialidade: data.ESPECIALIDADE,
					interdicao: data.OBS_INTERDICAO,
					graduacao:
						data.NM_INSTITUICAO_GRADUACAO ||
						data.NM_FACULDADE_ESTRANGEIRA_GRADUACAO,
					situacao: data.SITUACAO,
					anoFormatura: Number.parseInt(data.DT_GRADUACAO),
				})),
		),
	})
	.transform((data) => ({
		isOk: data.status === "sucesso",
	}));

type crmResultModelType = z.infer<typeof crmResultModel>;

export default crmResultModel;
export type { crmResultModelType };
