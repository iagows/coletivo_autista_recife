import { Type, type Static } from "@sinclair/typebox";

export const contatoDTO = Type.Object({
	ddd: Type.Integer(),
	numero: Type.Integer(),
	isTelegram: Type.Boolean(),
	isWhatsapp: Type.Boolean(),
});

export type contatoType = Static<typeof contatoDTO>;

export const pagamentoDTO = Type.Object({
	isParticular: Type.Boolean(),
	isPublico: Type.Boolean(),
	preco: Type.Number(),
	planos: Type.Array(Type.String()),
});

export type pagamentoType = Static<typeof pagamentoDTO>;

export const adminDTO = Type.Object({
	nome: Type.String(),
	email: Type.String(),
	last_seen: Type.Date(),
	contatos: Type.Array(contatoDTO),
});

export type adminType = Static<typeof adminDTO>;

export const enderecoDTO = Type.Object({
	cidade: Type.String(),
	bairro: Type.String(),
	logradouro: Type.String(),
	numero: Type.Number(),
	complemento: Type.Optional(Type.String()),
});

export type enderecoType = Static<typeof enderecoDTO>;

export const linkDTO = Type.Object({
	url: Type.String(),
});

export type linkType = Static<typeof linkDTO>;

export const regraDTO = Type.Object({
	id: Type.Optional(Type.String()),
	texto: Type.String(),
	descricao: Type.Union([Type.String(), Type.Null(), Type.Undefined()]),
});

export type regraType = Static<typeof regraDTO>;

export const consutorioEscolaDTO = Type.Object({
	nome: Type.String(),
	enderecos: Type.Array(enderecoDTO),
	contatos: Type.Array(contatoDTO),
	comentario: Type.Optional(Type.String()),
	especialidades: Type.Array(Type.String()),
	pagamento: pagamentoDTO,
});

export type consutorioEscolaType = Static<typeof consutorioEscolaDTO>;

export const textoDTO = Type.Object({
	id: Type.String(),
	referencia: Type.String(),
	texto: Type.String({ minLength: 6 }),
});

export type textoType = Static<typeof textoDTO>;

export const profissionalDTO = Type.Object({
	id: Type.String(),
	nome: Type.String(),
	comentario: Type.Optional(Type.String()),
	especialidades: Type.Array(Type.String()),
	enderecos: Type.Array(enderecoDTO),
	links: Type.Array(linkDTO),
	contatos: Type.Array(contatoDTO),
	pagamento: pagamentoDTO,
});

export type profissionalType = Static<typeof profissionalDTO>;
