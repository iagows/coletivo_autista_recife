import type { Collection, Db, WithId } from "mongodb";
import type { IMongoRepository } from "./IMongoRepository";

export abstract class MongoRepository<T extends Document>
	implements IMongoRepository<T>
{
	collection: Collection<T>;

	constructor(db: Db, collectionName: string) {
		this.collection = db.collection<T>(collectionName);
	}

	async findAll(): Promise<WithId<T>[]> {
		return await this.collection.find().toArray();
	}
}
