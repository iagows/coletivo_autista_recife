import {
	CardContent,
	CardHeader,
	Skeleton,
	Stack,
	Typography,
} from "@mui/material";
import CardContainer from "../../components/CardContainer";
import PaperCard from "../../components/PaperCard";
import useUtils from "../../hooks/useUtils";
import { useRulesSlice } from "../../stores/slices/regras/useRulesSlice";
import { useTextosSlice } from "../../stores/slices/textos/useTextosSlice";
import { TextIds } from "../../models/TextoModel";
import LoadingSkeleton from "../../components/LoadingSkeleton";

const RulesPage = () => {
	const { translate } = useUtils();
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
			{textError ? (
				<div>Erro: {textError}</div>
			) : (
				<>
					{textLoading ? (
						<>
							<Typography variant="h5" component="p">
								<Skeleton variant="rectangular" animation="wave" />
							</Typography>
							<Typography variant="h6" component="p">
								<Skeleton variant="rectangular" animation="wave" />
							</Typography>
						</>
					) : (
						<>
							<Typography variant="h5" component="p">
								{getByTextId(TextIds.REGRAS_TITULO)}
							</Typography>
							<Typography variant="h6" component="p">
								{getByTextId(TextIds.REGRAS_DESC)}
							</Typography>
						</>
					)}
				</>
			)}

			<Stack direction="column" spacing={2}>
				{rulesError ? (
					<div>Erro: {rulesError}</div>
				) : (
					<>
						{rulesLoading ? (
							<>
								<LoadingSkeleton amount={4} h={118} />
							</>
						) : (
							rulesData.map((r) => (
								<PaperCard key={r.id}>
									<CardHeader title={r.texto} />
									<CardContent>
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
							))
						)}
					</>
				)}
			</Stack>
		</CardContainer>
	);
};

export default RulesPage;
