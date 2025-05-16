import { useTextoSlice } from "@car/storage";
import { Typography } from "@mui/material";
import { useLocation } from "react-router";
import LoadingSkeleton from "../LoadingSkeleton";
import { getTitleByRoute } from "../../navigation/routes";

const useTopBar = () => {
	const currentRoute = useLocation().pathname;
	const currentPage = getTitleByRoute(currentRoute);

	const { getByReference, isLoading } = useTextoSlice();

	return {
		isLoading,
		title: getByReference(currentPage),
	};
};

export const PageTitle = () => {
	const { title, isLoading } = useTopBar();
	return (
		<>
			{isLoading ? (
				<LoadingSkeleton h={25} w={50} />
			) : (
				<Typography variant="h6">{title}</Typography>
			)}
		</>
	);
};
