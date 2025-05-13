import { CardContent, CardHeader, Typography } from "@mui/material";
import PaperCard from "../../components/PaperCard";
import type { regraType } from "@car/models";

const RuleItem = ({ texto, descricao }: regraType) => {
	return (
		<PaperCard>
			<CardHeader title={texto} />
			<CardContent>
				{descricao && (
					<Typography
						gutterBottom
						component="p"
						variant="body2"
						color="text.secondary"
					>
						{descricao}
					</Typography>
				)}
			</CardContent>
		</PaperCard>
	);
};

export default RuleItem;
