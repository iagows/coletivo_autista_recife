import type { textoType } from "@car/models";
import { useTextoSlice } from "@car/storage";
import {
	Box,
	Button,
	Card,
	CardContent,
	FormControl,
	Input,
	InputLabel,
	Stack,
} from "@mui/material";
import { useForm } from "react-hook-form";

type noIdTextType = Omit<textoType, "id">;

type Props = {
	item?: textoType;
};

const TextItem = ({ item }: Props) => {
	const { isLoading, updateTexto, addTexto } = useTextoSlice();

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

	const handleCancel = () => {
		reset();
	};

	const refId = `referencia-${item?.id ?? "novo"}`;
	const textId = `texto-${item?.id ?? "novo"}`;
	return (
		<Card variant="outlined" sx={{ mb: 2 }}>
			<CardContent>
				<Box
					component="form"
					onSubmit={handleSubmit(onSubmit)}
					sx={{ "& .MuiFormControl-root": { minWidth: 200 } }}
				>
					<Stack direction="row" gap={2} alignItems="flex-end" flexWrap="wrap">
						<FormControl variant="standard">
							<InputLabel htmlFor={refId} shrink>
								Referência
							</InputLabel>
							<Input
								id={refId}
								{...register("referencia")}
								disabled={isLoading}
								placeholder="referencia.do.texto"
							/>
						</FormControl>

						<FormControl variant="standard" sx={{ flexGrow: 1 }}>
							<InputLabel htmlFor={textId} shrink>
								Texto
							</InputLabel>
							<Input
								id={textId}
								{...register("texto")}
								disabled={isLoading}
								placeholder="Texto bonitinho"
								fullWidth
							/>
						</FormControl>

						<Stack direction="row" gap={1} sx={{ ml: "auto" }}>
							<Button
								type="button"
								variant="text"
								onClick={handleCancel}
								disabled={isLoading || !isDirty}
							>
								Cancelar
							</Button>
							<Button
								type="submit"
								variant="contained"
								disabled={!isDirty || isLoading}
							>
								{item ? "Atualizar" : "Adicionar"}
							</Button>
						</Stack>
					</Stack>
				</Box>
			</CardContent>
		</Card>
	);
};

export default TextItem;
