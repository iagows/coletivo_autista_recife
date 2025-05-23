import { Masonry } from "@mui/lab";
import { Paper, styled } from "@mui/material";
import type { JSX } from "react";
import LoadingSkeleton from "../LoadingSkeleton";
import TextFromId from "../TextFromId";
import type { ResponsiveStyleValue } from "@mui/system";

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

type D<T extends { id: string }> = {
	item: T;
};

type Props<T extends { id: string }> = {
	data: T[];
	textoId: string;
	isLoading: boolean;
	renderer: (item: D<T>) => JSX.Element;
	columns?: ResponsiveStyleValue<string | number>;
};

const DEFAULT_COLUMNS: ResponsiveStyleValue<string | number> = { md: 1, lg: 2, xl: 3 };

const TextAndGrid = <T extends { id: string }>({
	data,
	textoId,
	isLoading,
	renderer: R,
	columns = DEFAULT_COLUMNS,
}: Props<T>) => {
	return (
		<>
			<TextFromId textReference={textoId} />
			<Masonry columns={columns} spacing={2}>
				{isLoading ? (
					<LoadingSkeleton amount={6} w={500} h={100} />
				) : (
					data.map((d) => (
						<Item key={d.id}>
							<R item={d} />
						</Item>
					))
				)}
			</Masonry>
		</>
	);
};

export default TextAndGrid;
