import type { TextIds } from "@car/models/src/models/TextoModel";
import { useEffect } from "react";
import { fetchTextos } from ".";
import { useAppDispatch, useAppSelector } from "../../../hooks/reduxHooks";

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
