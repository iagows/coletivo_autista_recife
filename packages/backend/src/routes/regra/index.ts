import { idDto, regraDTO } from "@car/models";
import Elysia, { t } from "elysia";
import { PrismaClient } from "../../../generated/prisma";

const db = new PrismaClient();

const MODEL_NAME = "regra.model" as const;

export const RegraRoute = new Elysia({ prefix: "/regra" })
	.model({
		[MODEL_NAME]: regraDTO,
		"param.id": idDto,
	})
	.post(
		"/",
		async ({ body }) =>
			db.regra.create({
				data: body,
				select: {
					texto: true,
					descricao: true,
				},
			}),
		{
			error: ({ code, error }) => {
				switch (code) {
					case "VALIDATION":
						return {
							error: "O texto deve ser único",
						};
				}
				return error;
			},
			body: MODEL_NAME,
		},
	)
	.get(
		"/",
		async () =>
			db.regra.findMany({
				orderBy: {
					texto: "asc",
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
			params: "param.id",
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
			params: "param.id",
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
