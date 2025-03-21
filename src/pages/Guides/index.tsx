import { CardContent, Typography } from "@mui/material";
import CardContainer from "../../components/CardContainer";
import PaperCard from "../../components/PaperCard";
import { GuideModel, type GuideType } from "../../models/GuideModel";
import list from "./guias.json";

const guides: GuideType[] = list.map((i) => GuideModel.parse(i));

const Guide = () => {
	return (
		<CardContainer>
			{guides.map((g) => (
				<PaperCard key={g.id}>
					<CardContent>
						<Typography gutterBottom color="text.secondary">
							{g.titulo}
						</Typography>
						<Typography variant="h5" component="div">
							{g.texto}
						</Typography>
						{g.passos.map((p) => (
							<Typography key={p.id}>{p.texto}</Typography>
						))}
					</CardContent>
				</PaperCard>
			))}
		</CardContainer>
	);
};

export default Guide;
