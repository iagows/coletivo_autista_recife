import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { Box, Button, type SxProps } from "@mui/material";
import type { TelefoneType } from "../../../models/IndicationModel";

const boxCss: SxProps = { gap: 1 };

const PhoneButton = ({ numero, isWhatsapp }: TelefoneType) => {
	return (
		<Box display="flex" alignItems="center" sx={boxCss}>
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
			<Button component="a" href={`tel:${numero}`}>
				{numero}
			</Button>
		</Box>
	);
};

export default PhoneButton;
