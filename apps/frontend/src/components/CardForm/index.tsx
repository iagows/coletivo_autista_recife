import { Box, Button, Card, CardContent, Stack, type SxProps } from "@mui/material";
import type { FormEventHandler, PropsWithChildren } from "react";

const STACK_CSS: SxProps = { ml: "auto" };
const CARD_CSS: SxProps = { mb: 2 };
const FORM_CSS: SxProps = { "& .MuiFormControl-root": { minWidth: 200 } };

type Props = {
	onSubmit: FormEventHandler<HTMLFormElement>;
	hasItem: boolean;
	isDirty: boolean;
	isLoading: boolean;
	onCancel: () => void;
	onDelete: () => Promise<void>;
};

const CardForm = ({
	children,
	onSubmit,
	onCancel,
	isDirty,
	isLoading,
	onDelete,
	hasItem,
}: PropsWithChildren<Props>) => {
	return (
		<Card variant="outlined" sx={CARD_CSS}>
			<CardContent>
				<Box component="form" onSubmit={onSubmit} sx={FORM_CSS}>
					<Stack direction="row" gap={2} alignItems="flex-end" flexWrap="wrap">
						{children}
						<Stack direction="row" gap={1} sx={STACK_CSS}>
							<Button type="button" variant="text" onClick={onCancel} disabled={isLoading || !isDirty}>
								Cancelar
							</Button>
							<Button type="submit" variant="contained" disabled={!isDirty || isLoading}>
								{hasItem ? "Atualizar" : "Adicionar"}
							</Button>

							<Button type="button" variant="outlined" onClick={onDelete} disabled={isLoading || !hasItem}>
								Deletar
							</Button>
						</Stack>
					</Stack>
				</Box>
			</CardContent>
		</Card>
	);
};

export default CardForm;
