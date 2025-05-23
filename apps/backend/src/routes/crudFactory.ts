import { Elysia } from "elysia";
import type { PrismaClient } from "../../generated/prisma";

type PrismaDelegateMethods<T extends Record<string, unknown>> = {
	create: (args: {
		data: T;
		select?: Partial<Record<keyof T, boolean>>;
	}) => Promise<T>;
	findMany: (args?: {
		where?: Partial<T>;
		select?: Partial<Record<keyof T, boolean>>;
	}) => Promise<T[]>;
	findUnique: (args: {
		where: { id: string };
		select?: Partial<Record<keyof T, boolean>>;
	}) => Promise<T | null>;
	update: (args: {
		where: { id: string };
		data: Partial<T>;
		select?: Partial<Record<keyof T, boolean>>;
	}) => Promise<T>;
	delete: (args: {
		where: { id: string };
		select?: Partial<Record<keyof T, boolean>>;
	}) => Promise<T>;
};

type CRUDConfig<T extends Record<string, unknown>> = {
	prefix: string;
	selectFields?: Partial<Record<keyof T, boolean>>;
	uniqueFields?: (keyof T)[];
	errorMessages?: {
		validation?: string;
		notFound?: string;
	};
	validateUnique?: (body: T) => Promise<void>;
};

export const createCRUDRoute = <T extends Record<string, unknown>>(
	db: PrismaClient,
	delegateName: keyof PrismaClient,
	config: CRUDConfig<T>,
) => {
	const { prefix, selectFields, uniqueFields = [], errorMessages = {}, validateUnique } = config;

	const delegate = db[delegateName] as unknown as PrismaDelegateMethods<T>;

	const route = new Elysia({ prefix }).onError(({ code, error }) => {
		const defaultMessage = "Internal server error";
		const message = error instanceof Error ? error.message : defaultMessage;

		const errorMap = {
			VALIDATION: { error: errorMessages.validation || "Validation failed" },
			NOT_FOUND: { error: errorMessages.notFound || "Resource not found" },
			UNIQUE_CONSTRAINT: { error: errorMessages.validation || message },
		};

		return errorMap[code as keyof typeof errorMap] || { error: defaultMessage };
	});

	const checkUniqueness = async (body: T) => {
		if (validateUnique) {
			await validateUnique(body);
			return;
		}

		if (uniqueFields.length === 0) return;

		for (const field of uniqueFields) {
			const whereClause = { [field]: body[field] } as Partial<T>;
			const existing = await delegate.findMany({ where: whereClause });

			if (existing.length > 0) {
				throw new Error(errorMessages.validation || `Field ${String(field)} must be unique`);
			}
		}
	};

	return route
		.post("/", async ({ body }) => {
			const typedBody = body as T;
			await checkUniqueness(typedBody);
			return delegate.create({
				data: typedBody,
				select: selectFields,
			});
		})
		.get("/", async () => {
			return delegate.findMany({ select: selectFields });
		})
		.get("/:id", async ({ params }) => {
			const result = await delegate.findUnique({
				where: { id: params.id },
				select: selectFields,
			});
			if (!result) throw new Error("NOT_FOUND");
			return result;
		})
		.put("/:id", async ({ params, body }) => {
			const typedBody = body as Partial<T>;
			await checkUniqueness(typedBody as T);
			const result = await delegate.update({
				where: { id: params.id },
				data: typedBody,
				select: selectFields,
			});
			if (!result) throw new Error("NOT_FOUND");
			return result;
		})
		.delete("/:id", async ({ params }) => {
			const result = await delegate.delete({
				where: { id: params.id },
				select: selectFields,
			});
			if (!result) throw new Error("NOT_FOUND");
			return result;
		});
};
