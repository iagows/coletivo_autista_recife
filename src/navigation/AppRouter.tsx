import { CircularProgress } from "@mui/material";
import { Suspense, lazy } from "react";
import {
	Navigate,
	RouterProvider,
	createBrowserRouter,
} from "react-router-dom";
import ErrorPage from "../pages/ErrorPage";
import MainPage from "../pages/MainPage";
import RouteNames from "./RouteNames";

const GuidePage = lazy(() => import("../pages/GuidesPage"));
const LinksPage = lazy(() => import("../pages/LinksPage"));
const RulesPage = lazy(() => import("../pages/RulesPage"));
const WhoAreWePage = lazy(() => import("../pages/WhoAreWePage"));
const IndicationsPage = lazy(() => import("../pages/IndicationsPage"));
const EscolaPage = lazy(() => import("../pages/EscolaPage"));

const BASENAME = "/coletivo_autista_recife";

const router = createBrowserRouter(
	[
		{
			path: RouteNames.ROOT,
			element: <MainPage />,
			errorElement: <ErrorPage />,
			children: [
				{
					index: true,
					element: <Navigate to={RouteNames.QUEM_SOMOS} replace />,
				},
				{
					path: RouteNames.QUEM_SOMOS,
					element: (
						<Suspense fallback={<CircularProgress />}>
							<WhoAreWePage />
						</Suspense>
					),
				},
				{
					path: RouteNames.REGRAS,
					element: (
						<Suspense fallback={<CircularProgress />}>
							<RulesPage />
						</Suspense>
					),
				},
				{
					path: RouteNames.INDICACOES,
					element: (
						<Suspense fallback={<CircularProgress />}>
							<IndicationsPage />
						</Suspense>
					),
				},
				{
					path: RouteNames.CONSULTORIOS_ESCOLA,
					element: (
						<Suspense fallback={<CircularProgress />}>
							<EscolaPage />
						</Suspense>
					),
				},
				{
					path: RouteNames.LINKS,
					element: (
						<Suspense fallback={<CircularProgress />}>
							<LinksPage />
						</Suspense>
					),
				},
				{
					path: RouteNames.GUIAS,
					element: (
						<Suspense fallback={<CircularProgress />}>
							<GuidePage />
						</Suspense>
					),
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
