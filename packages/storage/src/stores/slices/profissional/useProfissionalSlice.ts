import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks/reduxHooks";
import { fetchProfissionais } from ".";

export const useProfissionalSlice = () => {
	const dispatch = useAppDispatch();
	const state = useAppSelector((state) => state.professionals);

	useEffect(() => {
		dispatch(fetchProfissionais());
	}, [dispatch]);

	return {
		...state,
		refetch: () => dispatch(fetchProfissionais()),
	};
};
