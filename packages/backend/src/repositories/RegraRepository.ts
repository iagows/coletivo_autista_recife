import type { RegraModelType } from "@car/models";
import type { Db } from "mongodb";
import { getCollections } from "../utils/mongoHelp";
import type { DocZod } from "./IMongoRepository";
import { MongoRepository } from "./MongoRepository";

export class RegraRepository extends MongoRepository<DocZod<RegraModelType>> {
	constructor(db: Db) {
		super(db, getCollections().regras);
	}
}
