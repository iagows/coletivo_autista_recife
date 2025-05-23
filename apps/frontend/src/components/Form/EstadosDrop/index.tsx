import { MenuItem, TextField } from "@mui/material";
import { estadosBrasil } from "./estados";
import { Controller, useFormContext } from "react-hook-form";

type EstadoSelectProps = {
	name: string;
	label?: string;
};

export const EstadoDrop = ({ name, label = "Estado" }: EstadoSelectProps) => {
	const { control } = useFormContext();

	return (
		<Controller
			name={name}
			control={control}
			render={({ field }) => (
				<TextField select label={label} value={field.value || ""} onChange={field.onChange} fullWidth>
					{estadosBrasil.map((estado) => (
						<MenuItem key={estado.sigla} value={estado.sigla}>
							{estado.nome}
						</MenuItem>
					))}
				</TextField>
			)}
		/>
	);
};
