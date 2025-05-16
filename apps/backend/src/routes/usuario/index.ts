import { UsuarioDto, errorResponse, idParam } from "@car/models";
import Elysia from "elysia";
import { PrismaClient } from "../../../generated/prisma";
import bcrypt from "bcrypt";

const db = new PrismaClient();

const MODEL_NAME = "usuario.model";
const PARAM_ID = "usuario.param.id";
const ERROR_RESPONSE = "usuario.error.response";
const DATA_RESPONSE = "usuario.response";

export const UsuarioRoute = new Elysia({ prefix: "/usuario" })
	.model({
		[MODEL_NAME]: UsuarioDto,
		[PARAM_ID]: idParam,
		[ERROR_RESPONSE]: errorResponse,
		[DATA_RESPONSE]: UsuarioDto,
	})
	.post(
		"/",
		async ({ body }) => {
			const hashedPassword = await bcrypt.hash(body.senha, 10);

			return db.usuario.create({
				data: { ...body, senha: hashedPassword },
				select: {
					cidade: true,
					contato: true,
					email: true,
					idade_diagnostico: true,
					motivacao: true,
					nascimento: true,
					nome: true,
					pronome: true,
					relacao: true,
					senha: true,
				},
			});
		},
		{
			body: MODEL_NAME,
			response: {
				200: DATA_RESPONSE,
				400: ERROR_RESPONSE,
				500: ERROR_RESPONSE,
			},
			detail: {
				200: {
					description: "Usuário cadastrado com sucesso",
					content: {
						"application/json": {
							schema: {
								$ref: `#/components/schemas/${DATA_RESPONSE}`,
							},
						},
					},
				},
				400: {
					description: "Dados inválidos",
					content: {
						"application/json": {
							schema: {
								$ref: `#/components/schemas/${ERROR_RESPONSE}`,
							},
						},
					},
				},
			},
		},
	)
	.get(
		"/",
		async () =>
			db.usuario.findMany({
				orderBy: {
					email: "asc",
				},
				select: {
					id: true,
					cidade: true,
					contato: true,
					email: true,
					idade_diagnostico: true,
					motivacao: true,
					nascimento: true,
					nome: true,
					pronome: true,
					relacao: true,
					senha: true,
				},
			}),
		{
			body: `${MODEL_NAME}[]`,
		},
	)
	.put(
		"/:id",
		async ({ params: { id }, body }) => {
			return db.usuario.update({
				where: { id },
				data: body,
				select: {
					id: true,
					cidade: true,
					contato: true,
					email: true,
					idade_diagnostico: true,
					motivacao: true,
					nascimento: true,
					nome: true,
					pronome: true,
					relacao: true,
					senha: true,
				},
			});
		},
		{
			params: PARAM_ID,
			body: MODEL_NAME,
			error: ({ code }) => {
				switch (code) {
					case "VALIDATION":
						return {
							error: "Dados inválidos",
						};
					case "NOT_FOUND":
						return {
							error: "Usuário não encontrado",
						};
				}
			},
		},
	)
	// DELETE - Remover usuário
	.delete(
		"/:id",
		async ({ params: { id } }) => {
			return db.usuario.delete({
				where: { id },
				select: {
					id: true,
					cidade: true,
					contato: true,
					email: true,
					idade_diagnostico: true,
					motivacao: true,
					nascimento: true,
					nome: true,
					pronome: true,
					relacao: true,
					senha: true,
				},
			});
		},
		{
			params: PARAM_ID,
			error: ({ code }) => {
				switch (code) {
					case "NOT_FOUND":
						return {
							error: "Usuário não encontrado",
						};
				}
			},
		},
	);
