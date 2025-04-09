import { CardContent, CardHeader, Typography } from "@mui/material";
import PaperCard from "../../components/PaperCard";
import type { RulesModelType } from "../../models/RuleModel";

const RuleItem = ({ texto, detalhamento }: RulesModelType) => {
	return (
		<PaperCard>
			<CardHeader title={texto} />
			<CardContent>
				{detalhamento && (
					<Typography
						gutterBottom
						component="p"
						variant="body2"
						color="text.secondary"
					>
						{detalhamento}
					</Typography>
				)}
			</CardContent>
		</PaperCard>
	);
};

export default RuleItem;
