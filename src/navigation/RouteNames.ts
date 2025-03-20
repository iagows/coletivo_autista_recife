import Diversity3OutlinedIcon from "@mui/icons-material/Diversity3Outlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import InsertLinkOutlinedIcon from "@mui/icons-material/InsertLinkOutlined";
import RuleOutlinedIcon from "@mui/icons-material/RuleOutlined";
import type { SvgIconTypeMap } from "@mui/material";
import type { OverridableComponent } from "@mui/material/OverridableComponent";

enum RouteNames {
	ROOT = "/",
	REGRAS = "/regras",
	LINKS = "/links",
	QUEM_SOMOS = "/quem_somos",
}

export default RouteNames;

type RouteData = {
	title: string;
	// biome-ignore lint/complexity/noBannedTypes: <explanation>
	icon: OverridableComponent<SvgIconTypeMap<{}, "svg">> & {
		muiName: string;
	};
};

const routeName: Map<RouteNames, RouteData> = new Map([
	[RouteNames.ROOT, { title: "page.title", icon: HomeOutlinedIcon }],
	[RouteNames.REGRAS, { title: "Regras", icon: RuleOutlinedIcon }],
	[RouteNames.LINKS, { title: "Links", icon: InsertLinkOutlinedIcon }],
	[
		RouteNames.QUEM_SOMOS,
		{ title: "page.title", icon: Diversity3OutlinedIcon },
	],
]);

export const getRouteTitle = (route: RouteNames): string => {
	return routeName.get(route)?.title ?? "page.title";
};

export const getRouteIcon = (route: RouteNames) => {
	return routeName.get(route)?.icon ?? HomeOutlinedIcon;
};
