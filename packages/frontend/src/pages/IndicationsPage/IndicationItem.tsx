import type { ProfissionalContractType } from "@car/models";
import type { EnderecoModelType } from "@car/models/src/models/EnderecoModel";
import type { EspecialidadeModelType } from "@car/models/src/models/EspecialidadeModel";
import type { LinkModelType } from "@car/models/src/models/LinkModel";
import type { PlanoModelType } from "@car/models/src/models/PlanoModel";
import type { TelefoneModelType } from "@car/models/src/models/TelefoneModel";
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

const espcs = (especialidades: EspecialidadeModelType[]) =>
	especialidades
		.map((e) => e.nome.charAt(0).toUpperCase() + e.nome.slice(1).toLowerCase())
		.join(", ");

type Props = {
	profissional: ProfissionalContractType;
	links: LinkModelType[];
	planos: PlanoModelType[];
	telefones: TelefoneModelType[];
	enderecos: EnderecoModelType[];
	especialidades: EspecialidadeModelType[];
};

const IndicationItem = ({
	profissional,
	links,
	planos,
	telefones,
	enderecos,
	especialidades,
}: Props) => {
	const { id, conselhos, nome, preco, publico, comentario, particular } =
		profissional;

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
					<PagamentoInfo
						preco={preco}
						planos={planos}
						isPublico={publico}
						isParticular={particular}
					/>
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
