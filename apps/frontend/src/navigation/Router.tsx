import {
	Navigate,
	RouterProvider,
	createBrowserRouter,
} from "react-router-dom";
import ErrorPage from "../pages/ErrorPage";
import ProtectedRoute from "./ProtectedRoute";
import { getIndexPath, getMainPageRoute, getRoutes } from "./routes";

const BASENAME = "/coletivo_autista_recife";

const main = getMainPageRoute();
const pages = getRoutes();
const indexPath = getIndexPath();

const router = createBrowserRouter(
	[
		{
			path: main.path,
			element: main.page,
			errorElement: <ErrorPage />,
			children: [
				{
					index: true,
					element: <Navigate to={indexPath} replace />,
				},
				...pages.map((item) => ({
					path: item.path,
					element: item.isProtected ? (
						<ProtectedRoute>{item.page}</ProtectedRoute>
					) : (
						item.page
					),
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
