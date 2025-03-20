import { Box, type SxProps } from "@mui/material";
import { Outlet } from "react-router";
import AppDrawer from "../../components/AppDrawer";
import AppTopbar from "../../components/AppTopbar";
import { DRAWER_WIDTH } from "../../util/constants";
import useUtils from "../../hooks/useUtils";

const mainCss = (isMobile: boolean): SxProps => ({
	flexGrow: 1,
	p: 3, // Padding para o conteúdo
	marginLeft: `${DRAWER_WIDTH}px`, // Margem à esquerda igual à largura do Drawer
});
const MainPage = () => {
	const { isMobile } = useUtils();

	return (
		<Box display={"flex"} flexDirection={"column"}>
			<AppTopbar />
			<AppDrawer />
			<Box sx={mainCss(isMobile)}>
				<Outlet />
			</Box>
		</Box>
	);
};

export default MainPage;
