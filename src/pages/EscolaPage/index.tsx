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

const tableBoxCss: SxProps = { marginTop: 4, marginBottom: 4 };

const EscolaPage = () => {
	const { translate } = useUtils();
	return (
		<Box>
			<Typography>{translate("escola.conteudo")}</Typography>
			<Box sx={tableBoxCss}>
				<Table size="small">
					<TableHead>
						<TableRow>
							<TableCell>{translate("escola.tabela.faculdade")}</TableCell>
							<TableCell>{translate("escola.tabela.cidade")}</TableCell>
							<TableCell>{translate("escola.tabela.bairro")}</TableCell>
							<TableCell>{translate("escola.tabela.endereco")}</TableCell>
							<TableCell>{translate("escola.tabela.telefone")}</TableCell>
							<TableCell>{translate("escola.tabela.preco")}</TableCell>
						</TableRow>
					</TableHead>
				</Table>
			</Box>
			<Typography>
				{translate("escola.observacao", { date: "22-03-2025" })}
			</Typography>
		</Box>
	);
};

export default EscolaPage;
