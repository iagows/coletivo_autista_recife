import { Box, type SxProps, Typography } from "@mui/material";
import useUtils from "../../hooks/useUtils";
// import IndicationData, {
// 	getEspecialidade,
// 	type IndicationDataType,
// 	type ProfissionalModelType,
// } from "../../models/IndicationModel";
// import list from "./indicacoes.json";

const tableBoxCss: SxProps = {
	marginTop: 4,
	maxWidth: 450,
	minWidth: 300,
	width: "fit-content",
};
const cardCss: SxProps = { marginBottom: 2 };

// const dados: IndicationDataType = IndicationData.parse(list);
// const getEspecialideById = getEspecialidade(dados);
// const getEspecialidadeEConselhoText = (i: ProfissionalModelType) =>
// 	`${getEspecialideById(i.especialidade).nome} - ${i.conselho.join(" | ")}`;

const IndicationsPage = () => {
	const { translate } = useUtils();

	return (
		<Box>
			<Typography>{translate("indicacoes.conteudo")}</Typography>
			<Box sx={tableBoxCss}>
				{/* {dados.profissionais.map((i) => (
					<Card key={i.id} sx={cardCss}>
						<CardHeader
							avatar={
								<Avatar aria-label="Profissional">{i.profissional[0]}</Avatar>
							}
							title={i.profissional}
							subheader={getEspecialidadeEConselhoText(i)}
						/>
						<CardContent>
							{i.pagamento && <PagamentoInfo {...i.pagamento} />}
							{i.comentarios && (
								<Typography variant="body2" color="textSecondary">
									{translate("indicacoes.card.comentarios")}: {i.comentarios}
								</Typography>
							)}
							{i.contato && <ContactButton {...i.contato} />}
							<Typography variant="caption" color="textSecondary">
								{translate("indicacoes.card.atualizado", {
									date: i.atualizado,
								})}
							</Typography>
						</CardContent>
					</Card>
				))} */}
			</Box>
		</Box>
	);
};

export default IndicationsPage;
