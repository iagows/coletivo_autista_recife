import { useSettingsSlice } from "@car/storage";
import Brightness4Icon from "@mui/icons-material/Brightness4"; // Ícone de lua (dark)
import Brightness7Icon from "@mui/icons-material/Brightness7"; // Ícone de sol (light)
import { IconButton } from "@mui/material";

const ThemeSelector = () => {
	const { isDarkMode, toggleTheme } = useSettingsSlice();
	return (
		<IconButton color="inherit" onClick={toggleTheme}>
			{isDarkMode ? <Brightness7Icon /> : <Brightness4Icon />}
		</IconButton>
	);
};

export default ThemeSelector;
