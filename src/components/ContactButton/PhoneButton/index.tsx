import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import type { SxProps } from "@mui/material";

import NoReferrerButton from "../../NoReferrerButton";
import type { TelefoneModelType } from "../../../models/TelefoneModel";

const telegramCss: SxProps = {
	transform: "rotate(-40deg)",
};

const PhoneButton = ({ numero, isWhatsapp, isTelegram }: TelefoneModelType) => {
	return (
		<>
			{isWhatsapp && (
				<NoReferrerButton href={`https://wa.me/${numero}`}>
					<WhatsAppIcon />
				</NoReferrerButton>
			)}
			{isTelegram && (
				<NoReferrerButton href={`https://t.me/${numero}`}>
					<SendOutlinedIcon sx={telegramCss} />
				</NoReferrerButton>
			)}

			<NoReferrerButton href={`tel:${numero}`}>
				<PhoneOutlinedIcon />
			</NoReferrerButton>
		</>
	);
};

export default PhoneButton;
