import { Grid2, Paper, styled } from "@mui/material";
import TextFromId from "../TextFromId";
import LoadingSkeleton from "../LoadingSkeleton";
import type { JSX } from "react";

type D<T extends { id: string }> = {
	item: T;
};

type Props<T extends { id: string }> = {
	textoId: string;
	isLoading: boolean;
	data: T[];
	renderer: (item: D<T>) => JSX.Element;
};

// TODO: rever esse objeto depois
const Item = styled(Paper)(({ theme }) => ({
	backgroundColor: "#fff",
	...theme.typography.body2,
	padding: theme.spacing(1),
	textAlign: "center",
	color: theme.palette.text.secondary,
	...theme.applyStyles("dark", {
		backgroundColor: "#1A2027",
	}),
}));

const TextAndGrid = <T extends { id: string }>({ textoId, isLoading, data, renderer: R }: Props<T>) => {
	return (
		<>
			<TextFromId textReference={textoId} />
			<Grid2 container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
				{isLoading ? (
					<LoadingSkeleton amount={6} w={500} h={100} />
				) : (
					data.map((d) => (
						<Grid2 size={6} key={d.id}>
							<Item>
								<R item={d} />
							</Item>
						</Grid2>
					))
				)}
			</Grid2>
		</>
	);
};

export default TextAndGrid;
