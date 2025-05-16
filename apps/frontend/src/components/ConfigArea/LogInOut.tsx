import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
import { IconButton } from "@mui/material";

const LogInOut = () => {
	const isLogged = false;

	return (
		<IconButton color="inherit">
			{isLogged ? <LogoutIcon /> : <LoginIcon />}
		</IconButton>
	);
};

export default LogInOut;
