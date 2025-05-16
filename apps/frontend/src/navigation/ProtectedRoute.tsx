import { Navigate, useLocation } from "react-router-dom";
import { DevConfigurations } from "../util/configurations_dev";
// import { useAuth } from "../hooks/useAuth"; // Sua implementação de auth

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
	// const { isAuthenticated } = useAuth();
	const isAuthenticated = DevConfigurations.isAuth;

	const location = useLocation();

	if (!isAuthenticated) {
		return <Navigate to="/login" state={{ from: location }} replace />;
	}

	return children;
};

export default ProtectedRoute;
