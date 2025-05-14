import { authDTO, errorResponse, idParam } from "@car/models";
import { successResponse } from "@car/models/src/swagger.models";
import Elysia from "elysia";
import { PrismaClient } from "../../../generated/prisma";
import { sendMagicLink } from "../../security/email";
import { createMagicLinkToken } from "../../security/jwt";

const db = new PrismaClient();

const MODEL_NAME = "auth.model";
const PARAM_ID = "auth.param.id";
const ERROR_RESPONSE = "auth.error.response";
const SUCCESS_RESPONSE = "auth.success.response";

export const AuthRoute = new Elysia({ prefix: "/auth" })
	.model({
		[MODEL_NAME]: authDTO,
		[PARAM_ID]: idParam,
		[ERROR_RESPONSE]: errorResponse,
		[SUCCESS_RESPONSE]: successResponse,
	})
	.post(
		"/",
		async ({ body, request, set }) => {
			try {
				const { sender } = body;

				// Obtendo o IP da requisição
				const ip =
					request.headers.get("x-forwarded-for") ||
					request.headers.get("x-real-ip") ||
					"unknown";

				const cadastrados = await db.admin.findMany();

				const magicToken = await createMagicLinkToken(sender);

				if (cadastrados.some((item) => item.email === sender)) {
					await sendMagicLink(sender, magicToken);

					await db.emailToken.create({
						data: {
							ip,
							sender,
							when: new Date(),
						},
						select: {
							id: true,
							ip: true,
							sender: true,
							when: true,
						},
					});
					return {
						success: true,
					};
				}

				set.status = 403;
				return {
					error: "Você realmente deveria estar aqui?",
				};
			} catch (error) {
				set.status = 500;
				return {
					error:
						error instanceof Error
							? error.message
							: "An unknown error occurred",
				};
			}
		},
		{
			body: MODEL_NAME,
			response: {
				200: SUCCESS_RESPONSE,
				400: ERROR_RESPONSE,
				403: ERROR_RESPONSE,
				500: ERROR_RESPONSE,
			},
			detail: {
				200: {
					description: "E-mail enviado com sucesso",
					content: {
						"application/json": {
							schema: {
								$ref: `#/components/schemas/${SUCCESS_RESPONSE}`,
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
	);
