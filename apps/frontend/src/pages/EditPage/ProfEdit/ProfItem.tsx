import type { profissionalType } from "@car/models";
import { useProfissionalSlice } from "@car/storage";
import { Checkbox, FormControlLabel, InputAdornment, Stack, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import CardForm from "../../../components/CardForm";
import AddressEdit from "./AddressEdit";

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

type Props = {
	item?: profissionalType;
};

const ProfItem = ({ item }: Props) => {
	const { isLoading, addProfissional, removeProfissional, updateProfissional } = useProfissionalSlice();

	const hookResult = useForm<noIdProfissionalType>({
		defaultValues: {
			nome: item?.nome,
			links: item?.links,
			contatos: item?.contatos,
			conselhos: item?.conselhos,
			enderecos: item?.enderecos,
			pagamento: item?.pagamento,
			comentario: item?.comentario,
			especialidades: item?.especialidades,
			isConsultorioEscola: item?.isConsultorioEscola,
		},
	});

	const {
		reset,
		register,
		setValue,
		watch,
		handleSubmit,
		formState: { isDirty },
	} = hookResult;

	const onSubmit = async (data: noIdProfissionalType) => {
		if (item) {
			await updateProfissional({ id: item.id, ...data });
		} else {
			await addProfissional({ ...data });
		}
		reset({
			nome: item?.nome,
			links: item?.links,
			contatos: item?.contatos,
			conselhos: item?.conselhos,
			enderecos: item?.enderecos,
			pagamento: item?.pagamento,
			comentario: item?.comentario,
			especialidades: item?.especialidades,
			isConsultorioEscola: item?.isConsultorioEscola,
		});
	};

	const handleDelete = async () => {
		if (item) {
			await removeProfissional(item.id);
		}
	};

	const { isParticular, isPublico } = watch("pagamento");

	return (
		<CardForm
			hasItem={!!item}
			onCancel={reset}
			isDirty={isDirty}
			isLoading={isLoading}
			onDelete={handleDelete}
			onSubmit={handleSubmit(onSubmit)}
		>
			<Stack gap={2}>
				<Stack direction="row" gap={2} alignItems="flex-end" flexWrap="wrap">
					<TextField {...register("nome")} placeholder="Nome" fullWidth label="Nome" />
				</Stack>
				<TextField
					rows={4}
					multiline
					{...register("comentario")}
					placeholder="Comentários sobre o profissional"
					label="Comentários"
				/>
				<Stack direction="row" spacing={2}>
					<FormControlLabel
						control={
							<Checkbox checked={isPublico} onChange={(e) => setValue("pagamento.isPublico", e.target.checked)} />
						}
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
				<AddressEdit hookForm={hookResult} />
			</Stack>
		</CardForm>
	);
};

export default ProfItem;
