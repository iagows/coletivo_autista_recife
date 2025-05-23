import { useRegraSlice } from "@car/storage";
import TextAndGrid from "../../components/TextAndGrid";
import type { regraType } from "@car/models";
import { Box, Divider, type SxProps, Typography } from "@mui/material";

type Props = {
	item: regraType;
};

const BOX_CSS: SxProps = { p: 2 };
const DIVIDER_CSS: SxProps = { my: 1 };
const TYPOGRAPHY_CSS: SxProps = { textAlign: "justify" };

const Rule = ({ item }: Props) => {
	return (
		<Box sx={BOX_CSS}>
			<Typography variant="h6" component="h3" gutterBottom sx={TYPOGRAPHY_CSS}>
				{item.texto}
			</Typography>
			{item.descricao && (
				<>
					<Divider sx={DIVIDER_CSS} />
					<Typography variant="body1" component="div" sx={TYPOGRAPHY_CSS}>
						{item.descricao}
					</Typography>
				</>
			)}
		</Box>
	);
};

const RulesPage = () => {
	const { data: regras, isLoading } = useRegraSlice();
	return <TextAndGrid textoId="conteudo.descricao_regras" isLoading={isLoading} data={regras} renderer={Rule} />;
};

export default RulesPage;
