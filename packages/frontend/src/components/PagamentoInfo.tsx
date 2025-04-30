import { Box, Typography } from "@mui/material";
import type { PlanoModelType } from "../../../models/src/PlanoModel";

type Props = {
	isParticular: boolean;
	isPublico: boolean;
	preco?: number;
	planos: PlanoModelType[];
};
const PagamentoInfo = ({ isParticular, planos, isPublico, preco }: Props) => {
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
					Planos: {planos.map((p) => p.nome).join(", ")}
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
