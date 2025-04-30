import type { TextoModelType } from "@car/models";
import { Elysia } from "elysia";
import { getCollections, getMongoDatabase } from "./utils/mongoHelp";
import { EnvVars } from "./utils/EnvVars";

const Main = async () => {
	const db = await getMongoDatabase();

	const app = new Elysia()
		.decorate("db", db)
		.get("/", () => "Hello from Elysia!")
		.group("/api/textos", (app) =>
			app.get(
				"/",
				async ({ db }) =>
					await db
						.collection<TextoModelType>(getCollections().textos)
						.find()
						.toArray(),
			),
		)
		.listen(EnvVars.port);

	console.log(
		`🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`,
	);
};

Main();
