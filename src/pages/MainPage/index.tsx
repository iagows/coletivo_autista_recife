import { Box, Toolbar } from "@mui/material";
import { Outlet } from "react-router";

const MainPage = () => {
	return (
		<Box display={"flex"} flexDirection={"column"}>
			<Toolbar />
			<Outlet />
		</Box>
	);
};

export default MainPage;
