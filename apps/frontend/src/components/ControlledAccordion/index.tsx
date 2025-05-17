import type { JSX } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
	Accordion,
	AccordionDetails,
	AccordionSummary,
	Box,
	Typography,
} from "@mui/material";
import { useState } from "react";

export type AccordionContent = {
	title: string;
	editor: JSX.Element;
};

type Props = {
	contents: AccordionContent[];
};

const ControlledAccordion = ({ contents }: Props) => {
	const [expanded, setExpanded] = useState<string | false>(false);

	const handleChange =
		(panel: string) => (_: React.SyntheticEvent, isExpanded: boolean) => {
			setExpanded(isExpanded ? panel : false);
		};
	return (
		<Accordion
			expanded={expanded === "panel1"}
			onChange={handleChange("panel1")}
		>
			{contents.map((c) => (
				<Box key={c.title}>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls="panel1bh-content"
						id="panel1bh-header"
					>
						<Typography component="span">{c.title}</Typography>
					</AccordionSummary>
					<AccordionDetails>{c.editor}</AccordionDetails>
				</Box>
			))}
		</Accordion>
	);
};

export default ControlledAccordion;
