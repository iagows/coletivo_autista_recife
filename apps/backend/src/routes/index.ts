import Elysia from "elysia";
import { isDevMode } from "../utils/EnvVars";
import { AdminRoute } from "./admin";
import { ProfissionalRoute } from "./profissional";
import { RegraRoute } from "./regra";
import { TextoRoute } from "./texto";
import { UserRoute } from "./usuario";

export const ServerRoutes = () => {
	const route = new Elysia({ prefix: "/api" }).use(ProfissionalRoute).use(RegraRoute).use(TextoRoute);

	if (isDevMode) {
		route.use(AdminRoute).use(UserRoute);
	}
	return route;
};
