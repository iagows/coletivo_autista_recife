import { Typography } from "@mui/material";
import type { PlanoModelType } from "../models/PlanoModel";

type Props = {
	isParticular: boolean;
	isPublico: boolean;
	preco?: number;
	planos: PlanoModelType[];
};
const PagamentoInfo = ({ isParticular, planos, isPublico, preco }: Props) => {
	return (
		<>
			{isParticular && preco !== undefined && (
				<Typography variant="body2" color="textSecondary">
					Particular {preco ? `(+- R$ ${preco})` : ""}
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
		</>
	);
};

export default PagamentoInfo;
