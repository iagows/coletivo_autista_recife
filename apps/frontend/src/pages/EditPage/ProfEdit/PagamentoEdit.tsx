import type { profissionalType } from "@car/models";
import { Checkbox, FormControlLabel, InputAdornment, Stack, TextField } from "@mui/material";
import type { UseFormReturn } from "react-hook-form";

const numberProps = {
	input: {
		startAdornment: <InputAdornment position="start">R$</InputAdornment>,
		inputProps: {
			step: "0.01", // Permite incrementos de centavos
			min: "0", // Valor mínimo zero
			pattern: "\\d+(\\.\\d{1,2})?", // Padrão para 2 casas decimais
		},
	},
} as const;

type noIdProfissionalType = Omit<profissionalType, "id">;

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
type HookForm = UseFormReturn<noIdProfissionalType, any, noIdProfissionalType>;
type Props = {
	hookForm: HookForm;
};

const PagamentoEdit = ({ hookForm }: Props) => {
	const { register, setValue, watch } = hookForm;
	const { isParticular, isPublico } = watch("pagamento");

	return (
		<Stack direction="row" spacing={2}>
			<FormControlLabel
				control={<Checkbox checked={isPublico} onChange={(e) => setValue("pagamento.isPublico", e.target.checked)} />}
				label="Público"
			/>
			<FormControlLabel
				control={
					<Checkbox checked={isParticular} onChange={(e) => setValue("pagamento.isParticular", e.target.checked)} />
				}
				label="Privado"
			/>

			{isParticular && (
				<TextField
					fullWidth
					type="number"
					label="Preço"
					slotProps={numberProps}
					{...register("pagamento.preco", { valueAsNumber: true })}
				/>
			)}
		</Stack>
	);
};

export default PagamentoEdit;
