import { errorResponse, idParam, regraDTO } from "@car/models";
import Elysia from "elysia";
import { PrismaClient } from "../../../generated/prisma";

const db = new PrismaClient();

const MODEL_NAME = "regra.model";
const PARAM_ID = "regra.param.id";
const ERROR_RESPONSE = "regra.error.response";
const DATA_RESPONSE = "regra.response";

export const RegraRoute = new Elysia({ prefix: "/regra" })
	.model({
		[MODEL_NAME]: regraDTO,
		[PARAM_ID]: idParam,
		[ERROR_RESPONSE]: errorResponse,
		[DATA_RESPONSE]: regraDTO,
	})
	.post(
		"/",
		async ({ body }) =>
			db.regra.create({
				data: body,
				select: {
					id: true,
					texto: true,
					descricao: true,
				},
			}),
		{
			body: MODEL_NAME,
			response: {
				200: DATA_RESPONSE,
				400: ERROR_RESPONSE,
				500: ERROR_RESPONSE,
			},
			detail: {
				200: {
					description: "Regra criada com sucesso",
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
			db.regra.findMany({
				orderBy: {
					texto: "asc",
				},
				select: {
					id: true,
					descricao: true,
					texto: true,
				},
			}),
		{
			body: `${MODEL_NAME}[]`,
		},
	)
	.put(
		"/:id",
		async ({ params: { id }, body }) => {
			return db.regra.update({
				where: { id },
				data: body,
				select: {
					id: true,
					descricao: true,
					texto: true,
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
							error: "Regra não encontrada",
						};
				}
			},
		},
	)
	// DELETE - Remover regra
	.delete(
		"/:id",
		async ({ params: { id } }) => {
			return db.regra.delete({
				where: { id },
				select: {
					id: true,
					texto: true,
				},
			});
		},
		{
			params: PARAM_ID,
			error: ({ code }) => {
				switch (code) {
					case "NOT_FOUND":
						return {
							error: "Regra não encontrada",
						};
				}
			},
		},
	);
