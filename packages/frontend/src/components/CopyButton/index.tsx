import { useUtils } from "@car/storage";
import ContentCopyOutlinedIcon from "@mui/icons-material/ContentCopyOutlined";
import { Button, Snackbar, type SnackbarCloseReason } from "@mui/material";
import { useState } from "react";

type Props = {
	text: string;
};
const CopyButton = ({ text }: Props) => {
	const { translate } = useUtils();
	const [open, setOpen] = useState<boolean>(false);
	const [message, setMessage] = useState<string>("");

	const errorMessage = translate("snack.copia.falha");
	const successMessage = translate("snack.copia.sucesso");

	const showSnack = () => {
		setOpen(true);
	};

	const hideSnack = (
		_: React.SyntheticEvent | Event,
		reason?: SnackbarCloseReason,
	) => {
		if (reason === "clickaway") {
			return;
		}

		setOpen(false);
	};

	const handleSnack = (error?: Error) => {
		setMessage(error ? errorMessage : successMessage);
		showSnack();
	};

	const handleCopy = async () => {
		if (text) {
			try {
				await navigator.clipboard.writeText(text);
				handleSnack();
			} catch (error) {
				handleSnack(error as Error);
			}
		}
	};
	return (
		<>
			<Button onClick={handleCopy}>
				<ContentCopyOutlinedIcon />
			</Button>
			<Snackbar
				open={open}
				message={message}
				onClose={hideSnack}
				autoHideDuration={6000}
				anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
			/>
		</>
	);
};

export default CopyButton;
