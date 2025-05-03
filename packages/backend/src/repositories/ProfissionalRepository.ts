import type { ProfissionalModelType } from "@car/models";
import type { Db } from "mongodb";
import { getCollections } from "../utils/mongoHelp";
import type { DocZod } from "./IMongoRepository";
import { MongoRepository } from "./MongoRepository";

export class ProfissionalRepository extends MongoRepository<
	DocZod<ProfissionalModelType>
> {
	constructor(db: Db) {
		super(db, getCollections().profissionais);
	}
}
