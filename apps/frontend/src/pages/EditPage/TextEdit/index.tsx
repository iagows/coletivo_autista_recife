import { useTextoSlice } from "@car/storage";
import { Box } from "@mui/material";
import LoadingSkeleton from "../../../components/LoadingSkeleton";
import TextItem from "./TextItem";

const TextEdit = () => {
	const { isLoading, textos } = useTextoSlice();
	return (
		<Box display={"flex"} gap={2} flexDirection={"column"}>
			{isLoading ? (
				<LoadingSkeleton amount={6} w={350} h={80} />
			) : (
				textos?.map((t) => <TextItem key={t.id} item={t} />)
			)}
		</Box>
	);
};

export default TextEdit;
