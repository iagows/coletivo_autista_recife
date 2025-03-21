import {
	Box,
	Button,
	Card,
	CardActions,
	CardContent,
	Paper,
	type SxProps,
	Typography,
} from "@mui/material";
import type { CSSProperties } from "react";
import { Link } from "react-router-dom";
import LinksModel from "../../models/LinksModel";
import list from "./links.json";

const boxCss: SxProps = {
	p: 3,
	gap: 2,
	display: "flex",
	flexDirection: "column",
};

const linkCss: CSSProperties = { textDecoration: "none" };

const paperCss: SxProps = {
	borderRadius: 2,
};

const links = LinksModel.parse(list);

const LinksPage = () => {
	return (
		<Box sx={boxCss}>
			{links.map((l) => (
				<Paper elevation={3} sx={paperCss} key={l.url}>
					<Card>
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
					</Card>
				</Paper>
			))}
		</Box>
	);
};

export default LinksPage;
