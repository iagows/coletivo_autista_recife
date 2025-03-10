import { Box, Container, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

const App = () => {
	const { t } = useTranslation();
	document.title = t("page.title");
	return (
		<Container maxWidth="sm">
			<Box sx={{ my: 4 }}>
				<Typography variant="h4" component="h1" sx={{ mb: 2 }}>
					Base do projeto
				</Typography>
			</Box>
		</Container>
	);
};

export default App;
