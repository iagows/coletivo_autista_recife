import Elysia from "elysia";
import { isDevMode } from "../utils/EnvVars";
import { AdminRoute } from "./admin";
import { EscolaRoute } from "./escola";
import { ProfissionalRoute } from "./profissional";
import { RegraRoute } from "./regra";
import { TextoRoute } from "./texto";
import { AuthRoute } from "./auth";

export const ServerRoutes = () => {
	const route = new Elysia({ prefix: "/api" })
		.use(EscolaRoute)
		.use(ProfissionalRoute)
		.use(RegraRoute)
		.use(TextoRoute)
		.use(AuthRoute);

	if (isDevMode) {
		route.use(AdminRoute);
	}
	return route;
};
