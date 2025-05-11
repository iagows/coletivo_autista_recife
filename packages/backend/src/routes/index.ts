import Elysia from "elysia";
import { AdminRoute } from "./admin";
import { TextoRoute } from "./texto";
import { EnvVars } from "../utils/EnvVars";

export const ServerRoutes = () => {
	const route = new Elysia().use(TextoRoute);

	if (EnvVars.serverMode === "development") {
		route.use(AdminRoute);
	}
	return route;
};
