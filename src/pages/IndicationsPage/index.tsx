import {
	Box,
	type SxProps,
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableRow,
	Typography,
} from "@mui/material";
import useUtils from "../../hooks/useUtils";
import IndicationData, {
	getEspecialidade,
	type IndicationDataType,
} from "../../models/IndicationModel";
import list from "./indicacoes.json";
import ContactInfo from "./Contato";

const tableBoxCss: SxProps = { marginTop: 4 };

const dados: IndicationDataType = IndicationData.parse(list);

const IndicationsPage = () => {
	const { translate } = useUtils();
	const getEspecData = getEspecialidade(dados);

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
							<TableCell>
								{translate("indicacoes.tabela.especialidade")}
							</TableCell>
							<TableCell>{translate("indicacoes.tabela.conselho")}</TableCell>
							<TableCell>{translate("indicacoes.tabela.contato")}</TableCell>
							<TableCell>{translate("indicacoes.tabela.endereco")}</TableCell>
							<TableCell>{translate("indicacoes.tabela.pagamento")}</TableCell>
							<TableCell>{translate("indicacoes.tabela.custo")}</TableCell>
							<TableCell>
								{translate("indicacoes.tabela.comentarios")}
							</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{dados.profissionais.map((i) => (
							<TableRow key={i.id}>
								<TableCell>{i.profissional}</TableCell>
								<TableCell>{getEspecData(i.especialidade)?.nome}</TableCell>
								<TableCell>{i.conselho.join(" | ")}</TableCell>
								<TableCell>
									{i.contato && <ContactInfo {...i.contato} />}
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</Box>
		</Box>
	);
};

export default IndicationsPage;
