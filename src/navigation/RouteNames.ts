import Diversity3OutlinedIcon from "@mui/icons-material/Diversity3Outlined";
import FormatListNumberedOutlinedIcon from "@mui/icons-material/FormatListNumberedOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import InsertLinkOutlinedIcon from "@mui/icons-material/InsertLinkOutlined";
import RuleOutlinedIcon from "@mui/icons-material/RuleOutlined";
import type { SvgIconTypeMap } from "@mui/material";
import type { OverridableComponent } from "@mui/material/OverridableComponent";

enum RouteNames {
	ROOT = "/",
	REGRAS = "/regras",
	LINKS = "/links",
	GUIAS = "/guias",
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
	[
		RouteNames.QUEM_SOMOS,
		{ title: "path.quem_somos", icon: Diversity3OutlinedIcon },
	],
	[RouteNames.ROOT, { title: "page.title", icon: HomeOutlinedIcon }],
	[RouteNames.REGRAS, { title: "path.regras", icon: RuleOutlinedIcon }],
	[
		RouteNames.GUIAS,
		{ title: "path.guias", icon: FormatListNumberedOutlinedIcon },
	],
	[RouteNames.LINKS, { title: "path.links", icon: InsertLinkOutlinedIcon }],
]);

export const getRouteTitle = (route: RouteNames): string => {
	return routeName.get(route)?.title ?? "page.title";
};

export const getRouteAsList = () => {
	return [...routeName]
		.filter((item) => item[0] !== RouteNames.ROOT)
		.map((item) => ({
			path: item[0],
			title: item[1].title,
			Icon: item[1].icon,
		}));
};
