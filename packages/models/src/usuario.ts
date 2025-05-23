import { Type, type Static } from "@sinclair/typebox";
import { contatoDTO } from "./common";

export const UsuarioDto = Type.Object({
	id: Type.String(),
	email: Type.String(),
	contato: contatoDTO,
	pronome: Type.Integer(),
	nascimento: Type.Date(),
	cidade: Type.String(),
	relacao: Type.Integer(),
	motivacao: Type.String(),
	idade_diagnostico: Type.Optional(Type.Integer()),
	senha: Type.String(),
	nome: Type.String(),
});

export type UsuarioType = Static<typeof UsuarioDto>;
