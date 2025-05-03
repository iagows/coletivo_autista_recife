import type { TextoModelType } from "@car/models";
import type { Db } from "mongodb";
import { getCollections } from "../utils/mongoHelp";
import type { DocZod } from "./IMongoRepository";
import { MongoRepository } from "./MongoRepository";

export class TextoRepository extends MongoRepository<DocZod<TextoModelType>> {
	constructor(db: Db) {
		super(db, getCollections().textos);
	}
}
