import { Button, CardActions, CardContent, Typography } from "@mui/material";
import type { CSSProperties } from "react";
import { Link } from "react-router-dom";
import CardContainer from "../../components/CardContainer";
import PaperCard from "../../components/PaperCard";
import LinksModel, { type LinksModelType } from "../../models/LinksModel";
import list from "./links.json";

const linkCss: CSSProperties = { textDecoration: "none" };

const links: LinksModelType[] = list.map((i) => LinksModel.parse(i));

const LinksPage = () => {
	return (
		<CardContainer>
			{links.map((l) => (
				<PaperCard key={l.id}>
					<CardContent>
						<Typography gutterBottom color="text.secondary">
							{l.titulo}
						</Typography>
						<Typography variant="h5" component="div">
							{l.texto}
						</Typography>
					</CardContent>
					<CardActions>
						<Link to={l.url} style={linkCss} target="_blank">
							<Button size="small">Visitar</Button>{" "}
						</Link>
					</CardActions>
				</PaperCard>
			))}
		</CardContainer>
	);
};

export default LinksPage;
