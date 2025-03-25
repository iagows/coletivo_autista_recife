import InstagramIcon from "@mui/icons-material/Instagram";
import ParkOutlinedIcon from "@mui/icons-material/ParkOutlined";
import { Box, Button, type SxProps, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import type { ContatoModelType } from "../../../models/ContatoModel";
import PhoneButton from "./Telefone";

const boxGap: SxProps = { gap: 2, marginBottom: 2 };

const ContactInfo = ({
	email,
	link,
	telefone,
	instagram,
	linktree,
}: ContatoModelType) => {
	return (
		<Box sx={boxGap}>
			{email && <Typography>{email}</Typography>}
			{link?.length > 0 &&
				link.map((link) => (
					<Button component={RouterLink} to={link.url} key={link.id}>
						{link.texto}
					</Button>
				))}
			{telefone?.length > 0 &&
				telefone.map((telefone) => (
					<PhoneButton key={telefone.numero} {...telefone} />
				))}
			{instagram && (
				<Button>
					<InstagramIcon />
				</Button>
			)}
			{linktree && (
				<Button>
					<ParkOutlinedIcon />
				</Button>
			)}
		</Box>
	);
};

export default ContactInfo;
