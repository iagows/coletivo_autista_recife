import { CardContent, Skeleton, Stack, Typography } from "@mui/material";
import CardContainer from "../../components/CardContainer";
import PaperCard from "../../components/PaperCard";
import useUtils from "../../hooks/useUtils";
import { useRulesSlice } from "../../stores/slices/regras/useRulesSlice";

const RulesPage = () => {
	const { translate } = useUtils();
	const { data, error, loading } = useRulesSlice();

	return (
		<CardContainer>
			<Typography variant="h5" component="p">
				{translate("regras.titulo")}
			</Typography>
			<Typography variant="h6" component="p">
				{translate("regras.descricao")}
			</Typography>
			<Stack direction="column" spacing={2}>
				{error ? (
					<div>Erro: {error}</div>
				) : (
					<>
						{loading ? (
							<>
								<Skeleton variant="rectangular" height={118} animation="wave" />
								<Skeleton variant="rectangular" height={118} animation="wave" />
								<Skeleton variant="rectangular" height={118} animation="wave" />
								<Skeleton variant="rectangular" height={118} animation="wave" />
							</>
						) : (
							data.map((r) => (
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
							))
						)}
					</>
				)}
			</Stack>
		</CardContainer>
	);
};

export default RulesPage;
