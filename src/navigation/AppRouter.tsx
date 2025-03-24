import {
	Navigate,
	RouterProvider,
	createBrowserRouter,
} from "react-router-dom";
import ErrorPage from "../pages/ErrorPage";
import GuidePage from "../pages/GuidesPage";
import LinksPage from "../pages/LinksPage";
import MainPage from "../pages/MainPage";
import RulesPage from "../pages/RulesPage";
import WhoAreWePage from "../pages/WhoAreWePage";
import RouteNames from "./RouteNames";
import IndicationsPage from "../pages/IndicationsPage";
import EscolaPage from "../pages/EscolaPage";

const BASENAME = "/coletivo_autista_recife";

const router = createBrowserRouter(
	[
		{
			path: RouteNames.ROOT,
			element: <MainPage />,
			errorElement: <ErrorPage />,
			children: [
				{
					index: true, // Define a rota padrão
					element: <Navigate to={RouteNames.QUEM_SOMOS} replace />,
				},
				{
					path: RouteNames.QUEM_SOMOS,
					element: <WhoAreWePage />,
				},
				{
					path: RouteNames.REGRAS,
					element: <RulesPage />,
				},
				{
					path: RouteNames.INDICACOES,
					element: <IndicationsPage />,
				},
				{
					path: RouteNames.CONSULTORIOS_ESCOLA,
					element: <EscolaPage />,
				},
				{
					path: RouteNames.LINKS,
					element: <LinksPage />,
				},
				{
					path: RouteNames.GUIAS,
					element: <GuidePage />,
				},
				{
					path: "*",
					element: <Navigate to={RouteNames.QUEM_SOMOS} replace />,
				},
			],
		},
	],
	{
		basename: BASENAME,
	},
);

const AppRouter = () => {
	return <RouterProvider router={router} />;
};

export default AppRouter;
