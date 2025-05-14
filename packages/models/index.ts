import {
	authDTO,
	type authType,
	emailTokenDTO,
	type emailTokenType,
} from "./src/email";
import type {
	adminType,
	consutorioEscolaType,
	contatoType,
	enderecoType,
	linkType,
	pagamentoType,
	profissionalType,
	regraType,
	textoType,
} from "./src/models";
import {
	adminDTO,
	consutorioEscolaDTO,
	contatoDTO,
	enderecoDTO,
	linkDTO,
	pagamentoDTO,
	profissionalDTO,
	regraDTO,
	textoDTO,
} from "./src/models";
import { errorResponse, idParam } from "./src/swagger.models";

export {
	adminDTO,
	authDTO,
	consutorioEscolaDTO,
	contatoDTO,
	emailTokenDTO,
	enderecoDTO,
	errorResponse,
	idParam,
	linkDTO,
	pagamentoDTO,
	profissionalDTO,
	regraDTO,
	textoDTO,
};

export type {
	adminType,
	authType,
	consutorioEscolaType,
	contatoType,
	emailTokenType,
	enderecoType,
	linkType,
	pagamentoType,
	profissionalType,
	regraType,
	textoType,
};
