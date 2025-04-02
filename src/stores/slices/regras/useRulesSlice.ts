import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks/reduxHooks";
import { fetchRules } from ".";

export const useRulesSlice = () => {
	const dispatch = useAppDispatch();
	const state = useAppSelector((state) => state.rules);

	useEffect(() => {
		dispatch(fetchRules());
	}, [dispatch]);

	return {
		...state,
		refetch: () => dispatch(fetchRules()),
	};
};
