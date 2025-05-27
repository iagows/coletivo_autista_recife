import { Box, Button, Stack, Typography } from "@mui/material";
import type { ReactNode } from "react";
import type { FieldArrayWithId, FieldValues } from "react-hook-form";

type Props<T extends FieldValues> = {
	title: string;
	onAdd: () => void;
	fields: FieldArrayWithId<T>[];
	onRemove: (index: number) => void;
	renderer: (prop: { index: number }) => ReactNode;
};

const FormList = <T extends FieldValues>({ title, fields, onRemove, onAdd, renderer: R }: Props<T>) => {
	return (
		<Box>
			<Typography>{title}</Typography>

			{fields.map((field, index) => (
				<Stack key={field.id} direction={"row"}>
					<R index={index} />
					<Button
						onClick={() => {
							onRemove(index);
						}}
					>
						Remover
					</Button>
				</Stack>
			))}

			<Button onClick={onAdd}>Adicionar</Button>
		</Box>
	);
};

export default FormList;
