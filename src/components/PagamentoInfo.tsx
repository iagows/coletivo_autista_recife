import { Box, Typography } from "@mui/material";
import type { PagamentoModelType } from "../models/PagamentoModel";

const PagamentoInfo = ({
	particular,
	planos,
	publico,
	preco,
}: PagamentoModelType) => {
	return (
		<>
			{particular && (
				<Typography variant="body2" color="textSecondary">
					Particular {preco ? `(+- R$ ${preco})` : ""}
				</Typography>
			)}
			{planos?.length > 0 && (
				<Typography variant="body2" color="textSecondary">
					Planos
				</Typography>
			)}
			{publico && (
				<Typography variant="body2" color="textSecondary">
					Público
				</Typography>
			)}
		</>
	);
};

export default PagamentoInfo;
