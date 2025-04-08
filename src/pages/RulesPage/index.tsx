import { Stack, Typography } from "@mui/material";
import CardContainer from "../../components/CardContainer";
import LoadingSkeleton from "../../components/LoadingSkeleton";
import PrepareDisplay from "../../components/PrepareDisplay";
import { TextIds } from "../../models/TextoModel";
import { useRulesSlice } from "../../stores/slices/regras/useRulesSlice";
import { useTextosSlice } from "../../stores/slices/textos/useTextosSlice";
import RuleItem from "./RuleItem";

const RulesPage = () => {
	const {
		error: textError,
		loading: textLoading,
		getByTextId,
	} = useTextosSlice();
	const {
		data: rulesData,
		error: rulesError,
		loading: rulesLoading,
	} = useRulesSlice();

	return (
		<CardContainer>
			<PrepareDisplay
				error={textError}
				isLoading={textLoading}
				loadingComponent={<LoadingSkeleton />}
			>
				<Typography variant="h6" component="p">
					{getByTextId(TextIds.REGRAS_DESC)}
				</Typography>
			</PrepareDisplay>

			<Stack direction="column" spacing={2}>
				<PrepareDisplay
					error={rulesError}
					isLoading={rulesLoading}
					loadingComponent={<LoadingSkeleton amount={4} h={118} />}
				>
					{rulesData.map((r) => (
						<RuleItem rule={r} key={r.id} />
					))}
				</PrepareDisplay>
			</Stack>
		</CardContainer>
	);
};

export default RulesPage;
