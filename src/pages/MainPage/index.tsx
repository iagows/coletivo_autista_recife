import { Box, type SxProps, Toolbar } from "@mui/material";
import { Outlet } from "react-router";
import AppDrawer from "../../components/AppDrawer";
import AppTopbar from "../../components/AppTopbar";
import useUtils from "../../hooks/useUtils";
import { DRAWER_WIDTH } from "../../util/constants";

const mainCss: SxProps = { userSelect: "none" };

const pageCss = (isMobile: boolean): SxProps => ({
	p: 3,
	flexGrow: 1,
	marginLeft: `${isMobile ? 0 : DRAWER_WIDTH}px`, // Margem à esquerda igual à largura do Drawer
});

const MainPage = () => {
	const { isMobile } = useUtils();

	return (
		<Box display={"flex"} flexDirection={"column"} sx={mainCss}>
			<AppTopbar />
			<AppDrawer />
			<Box sx={pageCss(isMobile)}>
				<Toolbar />
				<Outlet />
			</Box>
		</Box>
	);
};

export default MainPage;
