import ContentCopyOutlinedIcon from "@mui/icons-material/ContentCopyOutlined";
import { Button, Snackbar, type SnackbarCloseReason } from "@mui/material";
import { useState } from "react";

type Props = {
	text: string;
};
const CopyButton = ({ text }: Props) => {
	const [open, setOpen] = useState<boolean>(false);
	const [message, setMessage] = useState<string>("");

	const errorMessage = "snack.copia.falha";
	const successMessage = "snack.copia.sucesso";

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
