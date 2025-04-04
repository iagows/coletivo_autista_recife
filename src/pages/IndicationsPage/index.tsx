import {
	Avatar,
	Box,
	Card,
	CardContent,
	CardHeader,
	Skeleton,
	type SxProps,
	Typography,
} from "@mui/material";
import useUtils from "../../hooks/useUtils";
import { useProfissionalSlice } from "../../stores/slices/profissional/useProfissionalSlice";
import PagamentoInfo from "../../components/PagamentoInfo";
import ContactButton from "../../components/ContactButton";

const tableBoxCss: SxProps = {
	marginTop: 4,
	maxWidth: 450,
	minWidth: 300,
	width: "fit-content",
};
const cardCss: SxProps = { marginBottom: 2 };

const IndicationsPage = () => {
	const { translate } = useUtils();
	const { data, error, loading } = useProfissionalSlice();
	return (
		<Box>
			<Typography>{translate("indicacoes.conteudo")}</Typography>
			<Box sx={tableBoxCss}>
				{error ? (
					<div>{`Erro: ${error}`}</div>
				) : (
					<>
						{loading ? (
							<Skeleton variant="rectangular" height={118} animation="wave" />
						) : (
							<>
								{data.map(
									({
										links,
										planos,
										telefones,
										enderecos,
										especialidades,
										profissional: {
											id,
											rqe,
											crm,
											nome,
											preco,
											isPublico,
											comentario,
											isParticular,
										},
									}) => {
										const espcs = especialidades.map((e) => e.nome).join(", ");
										const crmRqe = [crm, rqe]
											.filter((i) => i !== "")
											.join(", ");
										const CrmRqeText = crmRqe ? ` - ${crmRqe}` : "";
										return (
											<Card key={id} sx={cardCss}>
												<CardHeader
													avatar={
														<Avatar aria-label="Profissional">{nome[0]}</Avatar>
													}
													title={nome}
													subheader={`${espcs}${CrmRqeText}`}
												/>
												<CardContent>
													<PagamentoInfo
														preco={preco}
														planos={planos}
														isPublico={isPublico}
														isParticular={isParticular}
													/>
													{comentario && (
														<Typography variant="body2" color="textSecondary">
															{translate("indicacoes.card.comentarios")}:{" "}
															{comentario}
														</Typography>
													)}
													<ContactButton
														links={links}
														addresses={enderecos}
														telephones={telefones}
													/>
												</CardContent>
											</Card>
										);
									},
								)}
							</>
						)}
					</>
				)}
			</Box>
		</Box>
	);
};

export default IndicationsPage;
