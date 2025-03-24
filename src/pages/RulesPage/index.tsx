import { CardContent, Typography } from "@mui/material";
import CardContainer from "../../components/CardContainer";
import PaperCard from "../../components/PaperCard";
import RuleModel, { type RuleType } from "../../models/RuleModel";
import list from "./rules.json";

const rules: RuleType[] = list.map((l) => RuleModel.parse(l));

const RulesPage = () => {
	return (
		<CardContainer>
			{rules.map((r) => (
				<PaperCard key={r.id}>
					<CardContent>
						<Typography variant="h5" component="div">
							{r.texto}
						</Typography>
						<Typography gutterBottom color="text.secondary">
							{r.detalhamento}
						</Typography>
					</CardContent>
				</PaperCard>
			))}
		</CardContainer>
	);
};

export default RulesPage;
