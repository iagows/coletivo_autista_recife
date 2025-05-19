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
		<>
			{contents.map((c) => (
				<Accordion
					key={c.title}
					expanded={expanded === c.title}
					onChange={handleChange(c.title)}
				>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls={`${c.title}-content`}
						id={`${c.title}-header`}
					>
						<Typography component="span">{c.title}</Typography>
					</AccordionSummary>
					<AccordionDetails>{c.editor}</AccordionDetails>
				</Accordion>
			))}
		</>
	);
};

export default ControlledAccordion;
