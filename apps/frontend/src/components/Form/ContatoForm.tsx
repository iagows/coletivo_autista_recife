import { Checkbox, FormControlLabel, Stack, TextField } from "@mui/material";
import { useFormContext } from "react-hook-form";

type ContatoFormProps = {
	index: number;
};

export const ContatoForm = ({ index }: ContatoFormProps) => {
	const { register } = useFormContext();

	return (
		<Stack direction="row" spacing={2} alignItems="flex-start">
			<TextField label="DDD" type="number" {...register(`contatos.${index}.ddd`)} />
			<TextField label="Número" type="number" {...register(`contatos.${index}.numero`)} />
			<FormControlLabel control={<Checkbox {...register(`contatos.${index}.isWhatsapp`)} />} label="WhatsApp" />
			<FormControlLabel control={<Checkbox {...register(`contatos.${index}.isTelegram`)} />} label="Telegram" />
		</Stack>
	);
};
