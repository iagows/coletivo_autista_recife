import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import ArrowRightAltOutlinedIcon from "@mui/icons-material/ArrowRightAltOutlined";
import Diversity3OutlinedIcon from "@mui/icons-material/Diversity3Outlined";
import FormatListNumberedOutlinedIcon from "@mui/icons-material/FormatListNumberedOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import InsertLinkOutlinedIcon from "@mui/icons-material/InsertLinkOutlined";
import RuleOutlinedIcon from "@mui/icons-material/RuleOutlined";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import type { SvgIconTypeMap } from "@mui/material";
import type { OverridableComponent } from "@mui/material/OverridableComponent";
import type { JSX } from "react";
import { lazyWithSuspense } from "./LazySuspense";

const GuidePage = lazyWithSuspense(() => import("../pages/GuidesPage"));
const LinksPage = lazyWithSuspense(() => import("../pages/LinksPage"));
const RulesPage = lazyWithSuspense(() => import("../pages/RulesPage"));
const WhoAreWePage = lazyWithSuspense(() => import("../pages/WhoAreWePage"));
const IndicationsPage = lazyWithSuspense(
	() => import("../pages/IndicationsPage"),
);
const SchoolPage = lazyWithSuspense(() => import("../pages/SchoolPage"));
const MainPage = lazyWithSuspense(() => import("../pages/MainPage"));
const EditPage = lazyWithSuspense(() => import("../pages/EditPage"));

enum RouteNames {
	ROOT = "/",
	QUEM_SOMOS = "/quem_somos",
	REGRAS = "/regras",
	INDICACOES = "/indicacoes",
	CONSULTORIOS_ESCOLA = "/consultorios_escola",
	GUIAS = "/guias",
	LINKS = "/links",
	EDIT = "/editar",
}

const titleNames = {
	[RouteNames.ROOT]: "page.title",
	[RouteNames.QUEM_SOMOS]: "path.quem_somos",
	[RouteNames.REGRAS]: "path.regras",
	[RouteNames.INDICACOES]: "path.indicacoes_externas",
	[RouteNames.CONSULTORIOS_ESCOLA]: "path.escola",
	[RouteNames.GUIAS]: "path.guias",
	[RouteNames.LINKS]: "path.links",
	[RouteNames.EDIT]: "path.edit",
} as const;

// biome-ignore lint/complexity/noBannedTypes: <explanation>
type MuiIcon = OverridableComponent<SvgIconTypeMap<{}, "svg">> & {
	muiName: string;
};

type RouteProps = {
	isIndex?: boolean;
	Icon: MuiIcon;
	path: RouteNames;
	Page: JSX.Element;
	isProtected?: boolean;
};

const routes: RouteProps[] = [
	{
		Icon: HomeOutlinedIcon,
		path: RouteNames.ROOT,
		Page: MainPage,
	},
	{
		isIndex: true,
		Icon: Diversity3OutlinedIcon,
		path: RouteNames.QUEM_SOMOS,
		Page: WhoAreWePage,
	},
	{
		Icon: RuleOutlinedIcon,
		path: RouteNames.REGRAS,
		Page: RulesPage,
	},
	{
		Icon: ArrowRightAltOutlinedIcon,
		path: RouteNames.INDICACOES,
		Page: IndicationsPage,
	},
	{
		Icon: SchoolOutlinedIcon,
		path: RouteNames.CONSULTORIOS_ESCOLA,
		Page: SchoolPage,
	},
	{
		Icon: FormatListNumberedOutlinedIcon,
		path: RouteNames.GUIAS,
		Page: GuidePage,
	},
	{
		Icon: InsertLinkOutlinedIcon,
		path: RouteNames.LINKS,
		Page: LinksPage,
	},
	{
		Icon: AppRegistrationIcon,
		path: RouteNames.EDIT,
		Page: EditPage,
		isProtected: true,
	},
] as const;

export const getTitleByRoute = (route: RouteNames | string): string =>
	titleNames[route as RouteNames];

export const getMainPageRoute = (): RouteProps =>
	// biome-ignore lint/style/noNonNullAssertion: Se não existir, o site não existe
	routes.find((item) => item.path === RouteNames.ROOT)!;

export const getRoutes = (): RouteProps[] =>
	routes.filter((item) => item.path !== RouteNames.ROOT);

export const getIndexPath = (): string =>
	routes.filter((item) => item.isIndex)[0].path;
