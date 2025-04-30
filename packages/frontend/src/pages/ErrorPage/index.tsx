import { Box, Typography } from "@mui/material";
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
	const error = useRouteError() as Error;

	return (
		<Box
			p={3}
			display="flex"
			minHeight="100vh"
			textAlign="center"
			alignItems="center"
			flexDirection="column"
			justifyContent="center"
		>
			<Typography variant="h4" gutterBottom>
				Oops! Algo deu errado.
			</Typography>
			<Typography variant="body1" gutterBottom>
				{error.message || "Ocorreu um erro inesperado."}
			</Typography>
			<Typography variant="body2" color="textSecondary">
				Por favor, tente novamente mais tarde ou entre em contato com o suporte.
			</Typography>
		</Box>
	);
};

export default ErrorPage;
