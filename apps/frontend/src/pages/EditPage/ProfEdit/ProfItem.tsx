import type { profissionalType } from "@car/models";
import { useProfissionalSlice } from "@car/storage";
import { Stack, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import CardForm from "../../../components/CardForm";
import AppFormControl from "../../../components/CardForm/AppFormControl";
import AddressEdit from "./AddressEdit";

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

	const nameFieldId = `nome-${item?.id ?? "novo"}`;
	const comentarioFieldId = `comentario-${item?.id ?? "novo"}`;
	return (
		<CardForm
			hasItem={!!item}
			onCancel={reset}
			isDirty={isDirty}
			isLoading={isLoading}
			onDelete={handleDelete}
			onSubmit={handleSubmit(onSubmit)}
		>
			<Stack gap={2} alignItems="flex-end" flexWrap="wrap">
				<Stack direction="row" gap={2} alignItems="flex-end" flexWrap="wrap">
					<AppFormControl htmlFor={nameFieldId} label="Nome">
						<TextField id={nameFieldId} {...register("nome")} disabled={isLoading} placeholder="Nome" fullWidth />
					</AppFormControl>

					<AppFormControl htmlFor={comentarioFieldId} label="Comentários">
						<TextField
							rows={4}
							multiline
							disabled={isLoading}
							id={comentarioFieldId}
							{...register("comentario")}
							placeholder="Comentários da regra"
						/>
					</AppFormControl>
				</Stack>
				<AddressEdit hookForm={hookResult} />
			</Stack>
		</CardForm>
	);
};

export default ProfItem;
