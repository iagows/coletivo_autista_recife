import type { textoType } from "@car/models";
import { useTextoSlice } from "@car/storage";
import { Input, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import CardForm from "../../../components/CardForm";
import AppFormControl from "../../../components/CardForm/AppFormControl";

type noIdTextType = Omit<textoType, "id">;

type Props = {
	item?: textoType;
};

const TextItem = ({ item }: Props) => {
	const { isLoading, updateTexto, addTexto, removeTexto } = useTextoSlice();

	const {
		register,
		handleSubmit,
		reset,
		formState: { isDirty },
	} = useForm<noIdTextType>({
		defaultValues: {
			referencia: item?.referencia,
			texto: item?.texto,
		},
	});

	const onSubmit = async (data: noIdTextType) => {
		if (item) {
			await updateTexto({ id: item.id, ...data });
		} else {
			await addTexto({ ...data });
		}
		reset({ referencia: data.referencia, texto: data.texto });
	};

	const handleDelete = async () => {
		if (item) {
			await removeTexto(item.id);
		}
	};

	const textId = `texto-${item?.id ?? "novo"}`;
	const refId = `referencia-${item?.id ?? "novo"}`;
	return (
		<CardForm
			hasItem={!!item}
			onCancel={reset}
			isDirty={isDirty}
			isLoading={isLoading}
			onDelete={handleDelete}
			onSubmit={handleSubmit(onSubmit)}
		>
			<AppFormControl htmlFor={refId} label={"Referência"}>
				<Input id={refId} disabled={isLoading} {...register("referencia")} placeholder="referencia.do.texto" />
			</AppFormControl>

			<AppFormControl htmlFor={textId} label={"Texto"}>
				<TextField
					rows={4}
					fullWidth
					multiline
					id={textId}
					disabled={isLoading}
					{...register("texto")}
					placeholder="Texto bonitinho"
				/>
			</AppFormControl>
		</CardForm>
	);
};

export default TextItem;
