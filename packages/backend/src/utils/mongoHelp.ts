import { type Db, MongoClient } from "mongodb";
import { EnvVars } from "./EnvVars";

export const getMongoDatabase = async (): Promise<Db> => {
	const { credential, uri, appName, databaseName } = EnvVars.mongo;

	const mongoUrl = `mongodb+srv://${credential.user}:${credential.pass}@${uri}/?retryWrites=true&w=majority&appName=${appName}`;

	const client = new MongoClient(mongoUrl);

	// prepare drive to connect
	await client.connect();

	return client.db(databaseName);
};

export const getCollections = () => {
	return EnvVars.mongo.collections;
};
