import { FormControl, InputLabel, type SxProps } from "@mui/material";
import type { PropsWithChildren } from "react";

const CONTROL_CSS: SxProps = { flexGrow: 1 };

type Props = {
	label: string;
	htmlFor: string;
};

const AppFormControl = ({ htmlFor, children, label }: PropsWithChildren<Props>) => (
	<FormControl variant="standard" sx={CONTROL_CSS}>
		<InputLabel htmlFor={htmlFor} shrink>
			{label}
		</InputLabel>
		{children}
	</FormControl>
);

export default AppFormControl;
