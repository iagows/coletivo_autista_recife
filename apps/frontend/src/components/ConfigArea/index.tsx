import { Box } from "@mui/material";
import LogInOut from "./LogInOut";
import ThemeSelector from "./ThemeSelector";

const ConfigArea = () => {
	return (
		<Box gap={1.5} display="flex">
			<ThemeSelector />
			<LogInOut />
		</Box>
	);
};

export default ConfigArea;
