import { Add, Delete } from "@mui/icons-material";
import { Box, Button, IconButton, Paper, Stack, type SxProps, Typography } from "@mui/material";
import type { ReactNode } from "react";
import type { FieldArrayWithId, FieldValues } from "react-hook-form";

const MAIN_CONTAINER: SxProps = {
	padding: 2,
	borderRadius: 2,
	border: "1px solid",
	borderColor: "primary.main",
	backgroundColor: "background.paper",
};

const ITEM_CONTAINER: SxProps = {
	padding: 2,
	marginTop: 2,
	borderRadius: 2,
	border: "1px solid",
	borderColor: "divider",
	backgroundColor: "background.default",
};

const TITLE: SxProps = { mb: 2, fontWeight: "medium" };

const ADD_BT: SxProps = { mt: 2 };

type Props<T extends FieldValues> = {
	title: string;
	onAdd: () => void;
	fields: FieldArrayWithId<T>[];
	onRemove: (index: number) => void;
	renderer: (prop: { index: number }) => ReactNode;
};

const FormList = <T extends FieldValues>({ title, fields, onRemove, onAdd, renderer: Renderer }: Props<T>) => {
	return (
		<Paper sx={MAIN_CONTAINER} elevation={1}>
			<Typography variant="h6" sx={TITLE}>
				{title}
			</Typography>

			<Stack spacing={2}>
				{fields.map((field, index) => (
					<Box sx={ITEM_CONTAINER} key={field.id} display={"flex"}>
						<Renderer index={index} />
						<IconButton color="error" aria-label="Remover item" onClick={() => onRemove(index)}>
							<Delete fontSize="small" />
						</IconButton>
					</Box>
				))}
			</Stack>

			<Button onClick={onAdd} startIcon={<Add />} variant="outlined" sx={ADD_BT} fullWidth>
				Adicionar
			</Button>
		</Paper>
	);
};

export default FormList;
