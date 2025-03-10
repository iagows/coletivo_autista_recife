import type { SvgIconTypeMap } from "@mui/material";
import type { OverridableComponent } from "@mui/material/OverridableComponent";

enum RouteNames {
    ROOT = "/",
    REGRAS = "/regras",
    LINKS = "/links",
    QUEM_SOMOS = "/quem_somos",
}

export default RouteNames;

export type RouteInfoType = {
    text: string;
    url: string;
    // biome-ignore lint/complexity/noBannedTypes: <explanation>
    icon: OverridableComponent<SvgIconTypeMap<{}, "svg">>;
};