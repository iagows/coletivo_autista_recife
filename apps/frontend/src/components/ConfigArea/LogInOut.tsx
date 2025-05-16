import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
import { IconButton } from "@mui/material";
import { DevConfigurations } from "../../util/configurations_dev";

const LogInOut = () => {
	const isAuth = DevConfigurations.isAuth;

	return (
		<IconButton color="inherit">
			{isAuth ? <LogoutIcon /> : <LoginIcon />}
		</IconButton>
	);
};

export default LogInOut;
