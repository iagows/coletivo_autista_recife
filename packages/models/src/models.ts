import { type Static, Type } from "@sinclair/typebox";
import { contatoDTO, enderecoDTO, linkDTO, pagamentoDTO } from "./common";

export const adminDTO = Type.Object({
	id: Type.String(),
	nome: Type.String(),
	email: Type.String(),
	contatos: Type.Array(contatoDTO),
	last_seen: Type.Optional(Type.Date()),
});

export type adminType = Static<typeof adminDTO>;

export const regraDTO = Type.Object({
	id: Type.String(),
	texto: Type.String(),
	descricao: Type.Union([Type.String(), Type.Null(), Type.Undefined()]),
});

export type regraType = Static<typeof regraDTO>;

export const textoDTO = Type.Object({
	id: Type.String(),
	referencia: Type.String(),
	texto: Type.String({ minLength: 6 }),
});

export type textoType = Static<typeof textoDTO>;

export const conselhoDTO = Type.Object({
	identificador: Type.String(),
	estado: Type.String(),
});

export type conselhoType = Static<typeof conselhoDTO>;

export const profissionalDTO = Type.Object({
	id: Type.String(),
	nome: Type.String(),
	comentario: Type.Optional(Type.String()),
	pagamento: pagamentoDTO,
	isConsultorioEscola: Type.Boolean(),
	enderecos: Type.Array(enderecoDTO),
	especialidades: Type.Array(Type.String()),
	links: Type.Array(linkDTO),
	contatos: Type.Array(contatoDTO),
	conselhos: Type.Array(conselhoDTO),
});

export type profissionalType = Static<typeof profissionalDTO>;
