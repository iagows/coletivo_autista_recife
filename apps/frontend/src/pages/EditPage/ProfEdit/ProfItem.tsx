import type { profissionalType } from "@car/models";
import { useProfissionalSlice } from "@car/storage";
import { Checkbox, FormControlLabel, Stack, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import CardForm from "../../../components/CardForm";
import AddressEdit from "./AddressEdit";
import PagamentoEdit from "./PagamentoEdit";

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
		watch,
		register,
		setValue,
		handleSubmit,
		formState: { isDirty },
	} = hookResult;

	const { isParticular } = watch("pagamento") ?? { isParticular: false };

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
				<PagamentoEdit hookForm={hookResult} />
				<AddressEdit hookForm={hookResult} />
			</Stack>
		</CardForm>
	);
};

export default ProfItem;
