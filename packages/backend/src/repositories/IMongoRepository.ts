import type { Collection, WithId } from "mongodb";

export type DocZod<T> = T & Document;

export type IMongoRepository<T extends Document> = {
	collection: Collection<T>;
	findAll(): Promise<WithId<T>[]>;
};
