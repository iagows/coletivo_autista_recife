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
	consutorioEscolaDTO,
	type consutorioEscolaType,
	profissionalDTO,
	type profissionalType,
	regraDTO,
	type regraType,
	textoDTO,
	type textoType,
} from "./src/models";
import { errorResponse, idParam } from "./src/swagger.models";
import { UsuarioDto, type UsuarioType } from "./src/usuario";

export {
	adminDTO,
	consutorioEscolaDTO,
	contatoDTO,
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
	consutorioEscolaType,
	contatoType,
	enderecoType,
	linkType,
	pagamentoType,
	profissionalType,
	regraType,
	textoType,
	UsuarioType,
};
