import LocationOnIcon from "@mui/icons-material/LocationOn";
import type { AddressModelType } from "../../../models/AddressModel";
import NoReferrerButton from "../../NoReferrerButton";

const AddressButton = ({
	bairro,
	cidade,
	logradouro,
	numero,
}: AddressModelType) => {
	const local = `${logradouro}, ${numero}${bairro ? ` - ${bairro}` : ""}, ${cidade}`;
	return (
		<NoReferrerButton
			href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(local)}`}
			text={local}
		>
			<LocationOnIcon />
		</NoReferrerButton>
	);
};

export default AddressButton;
