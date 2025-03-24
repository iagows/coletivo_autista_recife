import { CardContent, Divider, Stack, Typography } from "@mui/material";
import CardContainer from "../../components/CardContainer";
import PaperCard from "../../components/PaperCard";
import RuleModel, { type RulesType } from "../../models/RuleModel";
import regras from "./rules.json";
import useUtils from "../../hooks/useUtils";

const rules: RulesType = RuleModel.parse(regras);

const RulesPage = () => {
	const { translate } = useUtils();
	return (
		<CardContainer>
			<Typography variant="h5" component="p">
				{rules.titulo}
			</Typography>
			<Typography variant="h6" component="p">
				{rules.texto}
			</Typography>
			<Stack direction="column" spacing={2}>
				{rules.regras.map((r) => (
					<PaperCard key={r.id}>
						<CardContent>
							<Typography variant="body1" component="p">
								{r.texto}
							</Typography>
							{r.detalhamento && (
								<Typography
									gutterBottom
									component="p"
									variant="body2"
									color="text.secondary"
								>
									{r.detalhamento}
								</Typography>
							)}
						</CardContent>
					</PaperCard>
				))}
			</Stack>
			{rules.atualizacao && (
				<Typography variant="overline">
					{translate("regras.updated", {
						date: rules.atualizacao,
					})}
				</Typography>
			)}
		</CardContainer>
	);
};

export default RulesPage;
