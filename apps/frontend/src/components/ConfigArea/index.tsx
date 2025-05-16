import { Box } from "@mui/material";
import { DevConfigurations } from "../../util/configurations_dev";
import LogInOut from "./LogInOut";
import ThemeSelector from "./ThemeSelector";

const ConfigArea = () => {
	return (
		<Box gap={1.5} display="flex">
			<ThemeSelector />
			{DevConfigurations.login && <LogInOut />}
		</Box>
	);
};

export default ConfigArea;
