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
	preco: Type.Optional(Type.Number()),
	planos: Type.Array(Type.String()),
});

export type pagamentoType = Static<typeof pagamentoDTO>;

export const enderecoDTO = Type.Object({
	cidade: Type.String(),
	bairro: Type.String(),
	logradouro: Type.String(),
	numero: Type.Optional(Type.Number()),
	complemento: Type.Optional(Type.String()),
});

export type enderecoType = Static<typeof enderecoDTO>;

export const linkDTO = Type.Object({
	url: Type.String(),
});

export type linkType = Static<typeof linkDTO>;
