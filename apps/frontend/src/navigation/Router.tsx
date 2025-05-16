import { CircularProgress } from "@mui/material";
import { Suspense } from "react";
import {
	Navigate,
	RouterProvider,
	createBrowserRouter,
} from "react-router-dom";
import ErrorPage from "../pages/ErrorPage";
import { getIndexPath, getMainPageRoute, getRoutes } from "./routes";

const BASENAME = "/coletivo_autista_recife";

const withSuspense = (component: React.ReactNode) => (
	<Suspense fallback={<CircularProgress />}>{component}</Suspense>
);

const main = getMainPageRoute();
const pages = getRoutes();
const indexPath = getIndexPath();

const router = createBrowserRouter(
	[
		{
			path: main.path,
			element: <main.Page />,
			errorElement: <ErrorPage />,
			children: [
				{
					index: true,
					element: <Navigate to={indexPath} replace />,
				},
				...pages.map((item) => ({
					path: item.path,
					element: withSuspense(<item.Page />),
				})),
				{
					path: "*",
					element: <Navigate to={indexPath} replace />,
				},
			],
		},
	],
	{
		basename: BASENAME,
	},
);

const MainRouter = () => {
	return <RouterProvider router={router} />;
};

export default MainRouter;
