import type { z } from "zod";

export type ApiDetail = {
	tags: string[];
	summary: string;
	description: string;
};

export type ApiTags = {
	name: string;
	description: string;
};

export type IController<T> = {
	getEndPoint(): string;
	getApiDetail(): ApiDetail;
	getAllData(): () => Promise<T[]>;
	getResponse(): z.ZodTypeAny;
	getTag(): ApiTags;
};
