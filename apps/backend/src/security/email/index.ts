import { isDevMode } from "../../utils/EnvVars";

const getSite = (): string => {
	return isDevMode
		? "http://localhost:13131"
		: "https://iagows.github.io/coletivo_autista_recife";
};
