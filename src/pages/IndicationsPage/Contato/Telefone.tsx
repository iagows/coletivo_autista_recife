import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { Button, type SxProps } from "@mui/material";
import type { TelefoneType } from "../../../models/IndicationModel";

const telegramCss: SxProps = {
	transform: "rotate(-40deg)",
};

const PhoneButton = ({ numero, isWhatsapp, isTelegram }: TelefoneType) => {
	return (
		<>
			{isWhatsapp && (
				<Button
					component="a"
					target="_blank"
					rel="noopener noreferrer"
					href={`https://wa.me/${numero}`}
				>
					<WhatsAppIcon />
				</Button>
			)}
			{isTelegram && (
				<Button
					component="a"
					target="_blank"
					rel="noopener noreferrer"
					href={`https://t.me/${numero}`}
				>
					<SendOutlinedIcon sx={telegramCss} />
				</Button>
			)}

			<Button component="a" href={`tel:${numero}`}>
				<PhoneOutlinedIcon />
			</Button>
		</>
	);
};

export default PhoneButton;
