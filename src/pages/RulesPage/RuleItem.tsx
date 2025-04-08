import { CardContent, CardHeader, Typography } from "@mui/material";
import PaperCard from "../../components/PaperCard";
import type { RulesModelType } from "../../models/RuleModel";

type Props = {
	rule: RulesModelType;
};
const RuleItem = ({ rule }: Props) => {
	return (
		<PaperCard>
			<CardHeader title={rule.texto} />
			<CardContent>
				{rule.detalhamento && (
					<Typography
						gutterBottom
						component="p"
						variant="body2"
						color="text.secondary"
					>
						{rule.detalhamento}
					</Typography>
				)}
			</CardContent>
		</PaperCard>
	);
};

export default RuleItem;
