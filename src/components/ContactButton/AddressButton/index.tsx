import LocationOnIcon from "@mui/icons-material/LocationOn";
import NoReferrerButton from "../../NoReferrerButton";
import type { EnderecoModelType } from "../../../models/EnderecoModel";

const AddressButton = ({
	bairro,
	cidade,
	numero,
	logradouro,
}: EnderecoModelType) => {
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
