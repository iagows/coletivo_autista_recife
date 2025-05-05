import type { AdminModelType } from "@car/models";
import type { Db } from "mongodb";
import { getCollections } from "../utils/mongoHelp";
import type { DocZod } from "./IMongoRepository";
import { MongoRepository } from "./MongoRepository";

export class AdminRepository extends MongoRepository<DocZod<AdminModelType>> {
	constructor(db: Db) {
		super(db, getCollections().admins);
	}
}
