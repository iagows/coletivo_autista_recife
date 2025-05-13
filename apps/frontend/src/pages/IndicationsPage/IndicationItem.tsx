import type {
	contatoType,
	enderecoType,
	linkType,
	profissionalType,
} from "@car/models";
import {
	Avatar,
	CardActions,
	CardContent,
	CardHeader,
	Grid2,
	Typography,
} from "@mui/material";
import ContactButton from "../../components/ContactButton";
import PagamentoInfo from "../../components/PagamentoInfo";
import PaperCard from "../../components/PaperCard";
import { gridSizeCss } from "../../util/constants";

const drName = (nome: string) => `Dr(a) ${nome}`;

const espcs = (especialidades: string[]) =>
	especialidades
		.map((e) => e.charAt(0).toUpperCase() + e.slice(1).toLowerCase())
		.join(", ");

type Props = {
	profissional: profissionalType;
	links: linkType[];
	telefones: contatoType[];
	enderecos: enderecoType[];
	especialidades: string[];
};

const IndicationItem = ({
	profissional,
	links,
	telefones,
	enderecos,
	especialidades,
}: Props) => {
	const { id, nome, comentario, pagamento } = profissional;

	const nameSpecs = `${drName(nome)} - ${espcs(especialidades)}`;
	// const crmRqe = [crm, rqe].filter((i) => i !== "").join(", ");

	return (
		<Grid2 size={gridSizeCss} key={id}>
			<PaperCard>
				<CardHeader
					title={nameSpecs}
					// subheader={crmRqe}
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
					<ContactButton
						links={links}
						addresses={enderecos}
						telephones={telefones}
					/>
				</CardActions>
			</PaperCard>
		</Grid2>
	);
};

export default IndicationItem;
