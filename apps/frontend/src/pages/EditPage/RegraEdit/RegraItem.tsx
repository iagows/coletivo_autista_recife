import type { regraType } from "@car/models";
import { useRegraSlice } from "@car/storage";
import { TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import CardForm from "../../../components/CardForm";
import AppFormControl from "../../../components/CardForm/AppFormControl";

type noIdRegraType = Omit<regraType, "id">;

type Props = {
	item?: regraType;
};

const RegraItem = ({ item }: Props) => {
	const { isLoading, updateRegra, addRegra, removeRegra } = useRegraSlice();

	const {
		register,
		handleSubmit,
		reset,
		formState: { isDirty },
	} = useForm<noIdRegraType>({
		defaultValues: {
			texto: item?.texto,
			descricao: item?.descricao,
		},
	});

	const onSubmit = async (data: noIdRegraType) => {
		if (item) {
			await updateRegra({ id: item.id, ...data });
		} else {
			await addRegra({ ...data });
		}
		reset({ descricao: data.descricao, texto: data.texto });
	};

	const handleDelete = async () => {
		if (item) {
			await removeRegra(item.id);
		}
	};

	const descricaoId = `descricao-${item?.id ?? "novo"}`;
	const textId = `regra-${item?.id ?? "novo"}`;
	return (
		<CardForm
			hasItem={!!item}
			onCancel={reset}
			isDirty={isDirty}
			isLoading={isLoading}
			onDelete={handleDelete}
			onSubmit={handleSubmit(onSubmit)}
		>
			<AppFormControl htmlFor={textId} label="Regra">
				<TextField
					id={textId}
					{...register("texto")}
					disabled={isLoading}
					placeholder="Regra"
					fullWidth
					multiline
					rows={4}
				/>
			</AppFormControl>

			<AppFormControl htmlFor={descricaoId} label="Descrição">
				<TextField
					id={descricaoId}
					{...register("descricao")}
					disabled={isLoading}
					placeholder="Descrição da regra"
					multiline
					rows={4}
				/>
			</AppFormControl>
		</CardForm>
	);
};

export default RegraItem;
