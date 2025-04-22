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
import useUtils from "../../hooks/useUtils";
import type { EnderecoModelType } from "../../models/EnderecoModel";
import type { EspecialidadeModelType } from "../../models/EspecialidadeModel";
import type { LinkModelType } from "../../models/LinkModel";
import type { PlanoModelType } from "../../models/PlanoModel";
import type { ProfissionalModelType } from "../../models/ProfissionalModel";
import type { TelefoneModelType } from "../../models/TelefoneModel";
import { gridSizeCss } from "../../util/constants";

const drName = (nome: string) => `Dr(a) ${nome}`;

const espcs = (especialidades: EspecialidadeModelType[]) =>
	especialidades
		.map((e) => e.nome.charAt(0).toUpperCase() + e.nome.slice(1).toLowerCase())
		.join(", ");

type Props = {
	profissional: ProfissionalModelType;
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
	const { translate } = useUtils();
	const { id, rqe, crm, nome, preco, isPublico, comentario, isParticular } =
		profissional;

	const nameSpecs = `${drName(nome)} - ${espcs(especialidades)}`;
	const crmRqe = [crm, rqe].filter((i) => i !== "").join(", ");

	return (
		<Grid2 size={gridSizeCss} key={id}>
			<PaperCard>
				<CardHeader
					title={nameSpecs}
					subheader={crmRqe}
					avatar={<Avatar aria-label="Profissional">{nome[0]}</Avatar>}
				/>
				<CardContent>
					<PagamentoInfo
						preco={preco}
						planos={planos}
						isPublico={isPublico}
						isParticular={isParticular}
					/>
					{comentario && (
						<Typography variant="body2" color="textSecondary">
							{translate("indicacoes.card.comentarios")}: {comentario}
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
