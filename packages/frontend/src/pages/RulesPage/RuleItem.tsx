import type { RegraContractType } from "@car/models";
import { CardContent, CardHeader, Typography } from "@mui/material";
import PaperCard from "../../components/PaperCard";

const RuleItem = ({ texto, detalhamento }: RegraContractType) => {
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
