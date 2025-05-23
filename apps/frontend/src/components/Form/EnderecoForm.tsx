import { Stack, TextField } from "@mui/material";
import { useFormContext } from "react-hook-form";
import { EstadoDrop } from "./EstadosDrop";

type Props = {
	index: number;
};

export const EnderecoForm = ({ index }: Props) => {
	const { register } = useFormContext();

	return (
		<Stack spacing={2} sx={{ flex: 1 }}>
			<TextField label="Cidade" {...register(`enderecos.${index}.cidade`)} fullWidth />
			<TextField label="Bairro" {...register(`enderecos.${index}.bairro`)} fullWidth />
			<Stack direction="row" spacing={2}>
				<TextField label="Logradouro" {...register(`enderecos.${index}.logradouro`)} sx={{ flex: 2 }} />
				<TextField label="Número" type="number" {...register(`enderecos.${index}.numero`)} sx={{ flex: 1 }} />
			</Stack>
			<TextField label="Complemento" {...register(`enderecos.${index}.complemento`)} fullWidth />
			<EstadoDrop name={`enderecos.${index}.estado`} />
		</Stack>
	);
};
