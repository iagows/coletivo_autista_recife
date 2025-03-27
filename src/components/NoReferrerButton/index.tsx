import { Box, Button, Typography } from "@mui/material";
import type { PropsWithChildren } from "react";
import CopyButton from "../CopyButton";

type Props = {
	href: string;
	text?: string;
};

const NoReferrerButton = ({
	href,
	text,
	children,
}: PropsWithChildren<Props>) => {
	return (
		<Box display={"flex"} alignItems={"center"}>
			<Button
				href={href}
				component="a"
				target="_blank"
				rel="noopener noreferrer"
			>
				{children}
			</Button>
			{text && (
				<>
					<Typography variant="body2">{text}</Typography>
					<CopyButton text={text} />
				</>
			)}
		</Box>
	);
};

export default NoReferrerButton;
