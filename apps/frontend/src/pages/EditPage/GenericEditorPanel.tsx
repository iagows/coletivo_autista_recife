import { Box } from "@mui/material";
import type { ReactNode } from "react";
import LoadingSkeleton from "../../components/LoadingSkeleton";

type Props<T extends { id: string }> = {
	renderer: (props: { item?: T }) => ReactNode;
	hook: () => {
		data: T[];
		isLoading: boolean;
	};
};

const GenericEditorPanel = <T extends { id: string }>({ hook, renderer: C }: Props<T>) => {
	const { isLoading, data } = hook();
	return (
		<Box display={"flex"} gap={2} flexDirection={"column"}>
			{isLoading ? <LoadingSkeleton amount={6} w={350} h={80} /> : data?.map((t) => <C key={t.id} item={t} />)}
			<C />
		</Box>
	);
};

export default GenericEditorPanel;
