import type { GridBaseProps } from "@mui/material";
import packageJson from "../../../../backup/package.json";

export const PROJECT_VERSION = packageJson.version;

export const EnvVars = {
	server: {
		port: (import.meta.env.VITE_APP_EXAMPLE as number) || 12345,
	},
};

export const BASIC_CSS = {
	transition: {
		time: "0.3s",
		mode: "easy",
	},
	padding: {
		button: "9px 16px",
		page: "15px 25px",
	},
	caixaGrande: {
		width: "288px",
		height: "51px",
		radius: "10px",
	},
};

export const DRAWER_WIDTH = 300;

const gridSize: GridBaseProps = {
	size: {
		xs: 12,
		md: 6,
		lg: 4,
	},
};
export const gridSizeCss = gridSize.size;
