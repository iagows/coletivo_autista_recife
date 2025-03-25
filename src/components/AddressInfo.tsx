import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Button, type SxProps, Typography } from "@mui/material";
import type { AddressModelType } from "../models/AddressModel";

const addressCss: SxProps = { userSelect: "text" };

const AddressInfo = ({
	bairro,
	cidade,
	logradouro,
	numero,
}: AddressModelType) => {
	const local = `${logradouro}, ${numero}${bairro ? ` - ${bairro}` : ""}, ${cidade}`;
	return (
		<Typography variant="body2" sx={addressCss}>
			<Button
				component="a"
				target="_blank"
				rel="noopener noreferrer"
				href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(local)}`}
			>
				<LocationOnIcon />
			</Button>
			{local}
		</Typography>
	);
};

export default AddressInfo;
