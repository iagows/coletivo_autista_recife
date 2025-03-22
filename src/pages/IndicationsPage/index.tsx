import {
	Box,
	type SxProps,
	Table,
	TableCell,
	TableHead,
	TableRow,
	Typography,
} from "@mui/material";
import useUtils from "../../hooks/useUtils";

const tableBoxCss: SxProps = { marginTop: 4 };

const IndicationsPage = () => {
	const { translate } = useUtils();

	return (
		<Box>
			<Typography>{translate("indicacoes.conteudo")}</Typography>
			<Box sx={tableBoxCss}>
				<Table size="small">
					<TableHead>
						<TableRow>
							<TableCell>
								{translate("indicacoes.tabela.profissional")}
							</TableCell>
							<TableCell>{translate("indicacoes.tabela.endereco")}</TableCell>
							<TableCell>{translate("indicacoes.tabela.telefone")}</TableCell>
						</TableRow>
					</TableHead>
				</Table>
			</Box>
		</Box>
	);
};

export default IndicationsPage;
