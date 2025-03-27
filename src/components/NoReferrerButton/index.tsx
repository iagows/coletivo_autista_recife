import { Button } from "@mui/material";
import type { PropsWithChildren } from "react";

type Props = {
	href: string;
};
const NoReferrerButton = ({ href, children }: PropsWithChildren<Props>) => (
	<Button href={href} component="a" target="_blank" rel="noopener noreferrer">
		{children}
	</Button>
);

export default NoReferrerButton;
