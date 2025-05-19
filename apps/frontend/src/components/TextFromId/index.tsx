import { Typography } from "@mui/material";
import LoadingSkeleton from "../LoadingSkeleton";
import PrepareDisplay from "../PrepareDisplay";
import { useTextoSlice } from "@car/storage";

type Props = {
	textReference: string;
};

const TextFromId = ({ textReference }: Props) => {
	const { getByReference, error, isLoading } = useTextoSlice();
	return (
		<PrepareDisplay
			error={error}
			isLoading={isLoading}
			loadingComponent={<LoadingSkeleton />}
		>
			<Typography variant="h6" component="p">
				{getByReference(textReference)}
			</Typography>
		</PrepareDisplay>
	);
};

export default TextFromId;
