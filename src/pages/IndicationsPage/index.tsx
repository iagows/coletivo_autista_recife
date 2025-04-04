import {
	Avatar,
	Box,
	Card,
	CardContent,
	CardHeader,
	Grid2,
	type SxProps,
	Typography,
} from "@mui/material";
import ContactButton from "../../components/ContactButton";
import LoadingSkeleton from "../../components/LoadingSkeleton";
import PagamentoInfo from "../../components/PagamentoInfo";
import useUtils from "../../hooks/useUtils";
import { useProfissionalSlice } from "../../stores/slices/profissional/useProfissionalSlice";
import { gridSizeCss } from "../../util/constants";

const cardCss: SxProps = { marginBottom: 2 };

const IndicationsPage = () => {
	const { translate } = useUtils();
	const { data, error, loading } = useProfissionalSlice();
	return (
		<Box>
			<Typography>{translate("indicacoes.conteudo")}</Typography>
			<Grid2 container spacing={2}>
				{error ? (
					<div>{`Erro: ${error}`}</div>
				) : (
					<>
						{loading ? (
							<LoadingSkeleton w={450} h={250} amount={6} />
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
											<Grid2 size={gridSizeCss} key={id}>
												<Card sx={cardCss}>
													<CardHeader
														avatar={
															<Avatar aria-label="Profissional">
																{nome[0]}
															</Avatar>
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
											</Grid2>
										);
									},
								)}
							</>
						)}
					</>
				)}
			</Grid2>
		</Box>
	);
};

export default IndicationsPage;
