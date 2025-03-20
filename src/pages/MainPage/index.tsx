import { Box } from "@mui/material";
import { Outlet } from "react-router";
import AppTopbar from "../../components/AppTopbar";

const MainPage = () => {
	return (
		<Box display={"flex"} flexDirection={"column"}>
			<AppTopbar />
			<Outlet />
		</Box>
	);
};

export default MainPage;
