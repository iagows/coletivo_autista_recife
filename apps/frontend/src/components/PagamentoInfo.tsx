import type { pagamentoType } from "@car/models";
import { Box, Typography } from "@mui/material";

const PagamentoInfo = ({ isParticular, planos, isPublico, preco }: pagamentoType) => {
	const precoText = preco ? `: R$ ${preco} (valor aproximado)` : "";
	return (
		<Box>
			{isParticular && (
				<Typography variant="body2" color="textSecondary">
					Particular{precoText}
				</Typography>
			)}

			{planos.length > 0 && (
				<Typography variant="body2" color="textSecondary">
					Planos: {planos.join(", ")}
				</Typography>
			)}
			{isPublico && (
				<Typography variant="body2" color="textSecondary">
					Público
				</Typography>
			)}
		</Box>
	);
};

export default PagamentoInfo;
