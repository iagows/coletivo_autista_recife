import { Add, Remove } from "@mui/icons-material";
import { IconButton, Stack } from "@mui/material";
import type { ReactNode } from "react";

type EditableListProps<T extends { id: string }> = {
	fields: T[];
	onAdd: () => void;
	minItems?: number;
	onRemove: (index: number) => void;
	children: (item: T, index: number) => ReactNode;
};

export const EditableList = <T extends { id: string }>({
	fields,
	onAdd,
	onRemove,
	children,
	minItems = 0,
}: EditableListProps<T>) => {
	return (
		<Stack spacing={2}>
			{fields.map((field, index) => (
				<Stack key={field.id} direction="row" spacing={1} alignItems="flex-start">
					{children(field, index)}
					{fields.length > minItems && (
						<IconButton color="error" onClick={() => onRemove(index)} aria-label="Remover item">
							<Remove />
						</IconButton>
					)}
				</Stack>
			))}
			<IconButton color="primary" onClick={onAdd} aria-label="Adicionar item" sx={{ alignSelf: "flex-start" }}>
				<Add />
			</IconButton>
		</Stack>
	);
};
