import EnderecoModel, { type EnderecoModelType } from "../models/EnderecoModel";
import EspecialidadeModel, {
	type EspecialidadeModelType,
} from "../models/EspecialidadeModel";
import LinkModel, { type LinkModelType } from "../models/LinkModel";
import PlanoModel, { type PlanoModelType } from "../models/PlanoModel";
import ProfissionalModel from "../models/ProfissionalModel";
import TelefoneModel, { type TelefoneModelType } from "../models/TelefoneModel";
import EspecialidadeProfissionalModel from "../models/relation/EspecialidadeProfissionalModel";
import PlanoProfissionalModel from "../models/relation/PlanoProfissionalModel";
import { getFromListBySomeId, getRelation } from "../util/filterHelp";
import { Pages, getSheet } from "./api";

const getEspecialidades = async () =>
	await getSheet(Pages.ESPECIALIDADES, EspecialidadeModel.parse);

const getPlanos = async () => await getSheet(Pages.PLANOS, PlanoModel.parse);

const getEnderecos = async () =>
	await getSheet(Pages.ENDERECOS, EnderecoModel.parse);

const getLinks = async () => await getSheet(Pages.LINKS, LinkModel.parse);

const getTelefones = async () =>
	await getSheet(Pages.TELEFONE, TelefoneModel.parse);

const getPlanoProf = async () =>
	await getSheet(Pages.PLAN_PROF, PlanoProfissionalModel.parse);

const getEspecProf = async () =>
	await getSheet(Pages.ESPEC_PROF, EspecialidadeProfissionalModel.parse);

const getProfissional = async () =>
	await getSheet(Pages.PROFISSIONAIS, ProfissionalModel.parse);

export const getApiProfissionais = async () => {
	const especialidades = await getEspecialidades();
	const planos = await getPlanos();
	const enderecos = await getEnderecos();
	const links = await getLinks();
	const telefones = await getTelefones();

	const planoProfissional = await getPlanoProf();
	const especProf = await getEspecProf();

	const profissionais = await getProfissional();

	const filtroEspec = getRelation(especialidades)(
		especProf,
		"id_profissional",
		"id_especialidade",
	);

	const filtroPlano = getRelation(planos)(
		planoProfissional,
		"id_profissional",
		"id_plano",
	);

	const filtroEnderecos = getFromListBySomeId(enderecos, "idProfissional");
	const filtroLinks = getFromListBySomeId(links, "idProfissional");
	const filtroTelefones = getFromListBySomeId(telefones, "idProfissional");

	const output = [
		...profissionais.map((p) => ({
			profissional: p,
			planos: filtroPlano(p.id) as PlanoModelType[],
			especialidades: filtroEspec(p.id) as EspecialidadeModelType[],
			enderecos: filtroEnderecos(p.id) as EnderecoModelType[],
			links: filtroLinks(p.id) as LinkModelType[],
			telefones: filtroTelefones(p.id) as TelefoneModelType[],
		})),
	];

	output.sort((a, b) => a.profissional.nome.localeCompare(b.profissional.nome));

	return output;
};
