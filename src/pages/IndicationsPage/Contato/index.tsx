import { Box, Button, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import type { ContatoType } from "../../../models/IndicationModel";
import PhoneButton from "./Telefone";

const ContactInfo = ({ email, link, telefone }: ContatoType) => {
	return (
		<Box>
			{email && <Typography>{email}</Typography>}
			{link?.length > 0 && (
				<Box>
					{link.map((link) => (
						<Button component={RouterLink} to={link.url} key={link.nome}>
							{link.nome}
						</Button>
					))}
				</Box>
			)}
			{telefone?.length > 0 && (
				<Box>
					{telefone.map((telefone) => (
						<PhoneButton key={telefone.numero} {...telefone} />
					))}
				</Box>
			)}
		</Box>
	);
};

export default ContactInfo;
