import {
	adminDTO,
	consutorioEscolaDTO,
	contatoDTO,
	enderecoDTO,
	especialidadeDTO,
	linkDTO,
	profissionalDTO,
	regraDTO,
	textoDTO,
} from "@car/models";
import Elysia from "elysia";

export enum BODIES {
	ADMIN = "admin.data",
	CONSULTORIO_ESCOLA = "consultorio.escola.data",
	CONTATO = "contado.data",
	ENDERECO = "endereco.data",
	ESPECIALIDADE = "especialidade.data",
	LINK = "link.data",
	PROFISSIONAL = "profissional.data",
	REGRA = "regra.data",
	TEXTO = "texto.data",
}

export const SiteModels = new Elysia().model({
	[BODIES.ADMIN]: adminDTO,
	[BODIES.CONSULTORIO_ESCOLA]: consutorioEscolaDTO,
	[BODIES.CONTATO]: contatoDTO,
	[BODIES.ENDERECO]: enderecoDTO,
	[BODIES.ESPECIALIDADE]: especialidadeDTO,
	[BODIES.LINK]: linkDTO,
	[BODIES.PROFISSIONAL]: profissionalDTO,
	[BODIES.REGRA]: regraDTO,
	[BODIES.TEXTO]: textoDTO,
});
