import { Box, Typography } from "@mui/material";
import list from "./guias.json";
import { GuideModel } from "../../models/GuideModel";

const guides = GuideModel.parse(list);

const Guide = () => {
	return (
		<>
			{guides.map((g) => {
				<Box key={g.id}>
					<Typography>{g.titulo}</Typography>
					<Typography>{g.texto}</Typography>
				</Box>;
			})}
		</>
	);
};

export default Guide;
