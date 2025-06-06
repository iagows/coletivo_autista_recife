import type { conselhoType, profissionalType } from "@car/models";
import { Avatar, CardActions, CardContent, CardHeader, Grid, Typography } from "@mui/material";
import ContactButton from "../../components/ContactButton";
import PagamentoInfo from "../../components/PagamentoInfo";
import PaperCard from "../../components/PaperCard";
import { gridSizeCss } from "../../util/constants";

const drName = (nome: string) => `Dr(a) ${nome}`;

const espcs = (especialidades: string[]) =>
	especialidades.map((e) => e.charAt(0).toUpperCase() + e.slice(1).toLowerCase()).join(", ");

const conselhosToString = (conselhos: conselhoType[]): string =>
	conselhos.map((c) => `${c.identificador}-${c.estado}`).join(", ");

type Props = {
	item: profissionalType;
};

const IndicationItem = ({ item }: Props) => {
	const { id, nome, comentario, pagamento, especialidades, links, contatos, enderecos, conselhos } = item;

	const nameSpecs = `${drName(nome)} - ${espcs(especialidades)}`;

	return (
		<Grid size={gridSizeCss} key={id}>
			<PaperCard>
				<CardHeader
					title={nameSpecs}
					subheader={conselhosToString(conselhos)}
					avatar={<Avatar aria-label="Profissional">{nome[0]}</Avatar>}
				/>
				<CardContent>
					<PagamentoInfo {...pagamento} />
					{comentario && (
						<Typography variant="body2" color="textSecondary">
							{"indicacoes.card.comentarios"}: {comentario}
						</Typography>
					)}
				</CardContent>
				<CardActions>
					<ContactButton links={links} addresses={enderecos} telephones={contatos} />
				</CardActions>
			</PaperCard>
		</Grid>
	);
};

export default IndicationItem;
