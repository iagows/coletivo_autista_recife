import { useEffect } from "react";
import { fetchTextos } from ".";
import { useAppDispatch, useAppSelector } from "../../../hooks/reduxHooks";
import type { TextIds } from "../../../models/TextoModel";

export const useTextosSlice = () => {
	const dispatch = useAppDispatch();
	const state = useAppSelector((state) => state.textos);

	useEffect(() => {
		dispatch(fetchTextos());
	}, [dispatch]);

	const getByTextId = (id: TextIds): string => {
		return state.data.find((t) => t.id === id)?.texto ?? `${id}`;
	};

	return {
		getByTextId,
		...state,
		refetch: () => dispatch(fetchTextos()),
	};
};
