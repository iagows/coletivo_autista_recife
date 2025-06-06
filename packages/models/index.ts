import {
	contatoDTO,
	type contatoType,
	enderecoDTO,
	type enderecoType,
	linkDTO,
	type linkType,
	pagamentoDTO,
	type pagamentoType,
} from "./src/common";
import {
	adminDTO,
	type adminType,
	conselhoDTO,
	type conselhoType,
	profissionalDTO,
	type profissionalType,
	regraDTO,
	type regraType,
	textoDTO,
	type textoType,
} from "./src/models";
import { settingsDto, type settingsDtoType } from "./src/settings";
import { errorResponse, idParam } from "./src/swagger.models";
import { UsuarioDto, type UsuarioType } from "./src/usuario";
import { omitFieldFromDTO } from "./src/util";

const dtoHelp = omitFieldFromDTO;

export {
	adminDTO,
	conselhoDTO,
	contatoDTO,
	dtoHelp,
	enderecoDTO,
	errorResponse,
	idParam,
	linkDTO,
	pagamentoDTO,
	profissionalDTO,
	regraDTO,
	settingsDto,
	textoDTO,
	UsuarioDto,
};

export type {
	adminType,
	conselhoType,
	contatoType,
	enderecoType,
	linkType,
	pagamentoType,
	profissionalType,
	regraType,
	settingsDtoType,
	textoType,
	UsuarioType,
};
