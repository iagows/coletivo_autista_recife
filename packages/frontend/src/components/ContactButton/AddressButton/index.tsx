import type { EnderecoModelType } from "@car/models/src/models/EnderecoModel";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import NoReferrerButton from "../../NoReferrerButton";

const AddressButton = ({
	bairro,
	cidade,
	numero,
	logradouro,
	complemento,
}: EnderecoModelType) => {
	const local = `${logradouro}, ${numero}${bairro ? ` - ${bairro}` : ""}, ${cidade}`;
	const localComplement = complemento ? `${local} - ${complemento}` : local;
	return (
		<NoReferrerButton
			href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(local)}`}
			text={localComplement}
		>
			<LocationOnIcon />
		</NoReferrerButton>
	);
};

export default AddressButton;
