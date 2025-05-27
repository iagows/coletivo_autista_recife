import type { enderecoType, profissionalType } from "@car/models";
import { Stack, TextField } from "@mui/material";
import { type UseFormReturn, useFieldArray } from "react-hook-form";
import FormList from "./FormList";

const defaultAddress: enderecoType = {
	bairro: "",
	cidade: "Recife",
	numero: 0,
	logradouro: "",
	complemento: "",
};

type noIdProfissionalType = Omit<profissionalType, "id">;

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
type HookForm = UseFormReturn<noIdProfissionalType, any, noIdProfissionalType>;
type Props = {
	hookForm: HookForm;
};

const AddressEdit = ({ hookForm }: Props) => {
	const { control, register } = hookForm;
	const { fields, append, remove } = useFieldArray({
		control,
		name: "enderecos",
	});

	return (
		<FormList
			title="Endereços"
			fields={fields}
			onAdd={() => append(defaultAddress)}
			onRemove={remove}
			renderer={({ index }) => (
				<Stack direction="row" gap={2} alignItems="flex-start" flexWrap="wrap">
					<TextField label="Logradouro" variant="outlined" {...register(`enderecos.${index}.logradouro`)} />
					<TextField
						label="Número"
						variant="outlined"
						{...register(`enderecos.${index}.numero`, { valueAsNumber: true })}
					/>
					<TextField label="Complemento" variant="outlined" {...register(`enderecos.${index}.complemento`)} />
					<TextField label="Bairro" variant="outlined" {...register(`enderecos.${index}.bairro`)} />
					<TextField label="Cidade" variant="outlined" {...register(`enderecos.${index}.cidade`)} />
				</Stack>
			)}
		/>
	);
};

export default AddressEdit;
