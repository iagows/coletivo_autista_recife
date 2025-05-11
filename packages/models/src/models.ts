import { Type } from "@sinclair/typebox";

export const idDto = Type.Object({
	id: Type.String(),
});

export const contatoDTO = Type.Object({
	ddd: Type.Integer(),
	numero: Type.Integer(),
	isTelegram: Type.Boolean(),
	isWhatsapp: Type.Boolean(),
});

export const adminDTO = Type.Object({
	nome: Type.String(),
	email: Type.String(),
	last_seen: Type.Date(),
	contatos: Type.Array(contatoDTO),
});

export const enderecoDTO = Type.Object({
	cidade: Type.String(),
	bairro: Type.String(),
	logradouro: Type.String(),
	numero: Type.Number(),
	complemento: Type.Optional(Type.String()),
});

export const especialidadeDTO = Type.Object({
	id: Type.String(),
	nome: Type.String(),
});

export const linkDTO = Type.Object({
	url: Type.String(),
});

export const regraDTO = Type.Object({
	texto: Type.String(),
	descricao: Type.String(),
});

export const consutorioEscolaDTO = Type.Object({
	nome: Type.String(),
	preco: Type.Optional(Type.Number()),
	enderecos: Type.Array(enderecoDTO),
	contatos: Type.Array(contatoDTO),
	comentario: Type.Optional(Type.String()),
	especialidades: Type.Array(especialidadeDTO),
});

export const textoDTO = Type.Object({
	texto: Type.String({ minLength: 6 }),
});

export const profissionalDTO = Type.Object({
	id: Type.String(),
	nome: Type.String(),
	isParticular: Type.Optional(Type.Boolean()),
	isPublico: Type.Optional(Type.Boolean()),
	comentario: Type.Optional(Type.String()),
	preco: Type.Optional(Type.Number()),
	especialidades: Type.Array(especialidadeDTO),
	enderecos: Type.Array(enderecoDTO),
	links: Type.Array(linkDTO),
	contatos: Type.Array(contatoDTO),
});
