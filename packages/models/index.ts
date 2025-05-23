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
	profissionalDTO,
	type profissionalType,
	regraDTO,
	type regraType,
	textoDTO,
	type textoType,
} from "./src/models";
import { errorResponse, idParam } from "./src/swagger.models";
import { UsuarioDto, type UsuarioType } from "./src/usuario";
import { omitFieldFromDTO } from "./src/util";

const dtoHelp = omitFieldFromDTO;

export {
	adminDTO,
	contatoDTO,
	dtoHelp,
	enderecoDTO,
	errorResponse,
	idParam,
	linkDTO,
	pagamentoDTO,
	profissionalDTO,
	regraDTO,
	textoDTO,
	UsuarioDto,
};

export type {
	adminType,
	contatoType,
	enderecoType,
	linkType,
	pagamentoType,
	profissionalType,
	regraType,
	textoType,
	UsuarioType,
};
