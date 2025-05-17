import {
	useAddTextoMutation,
	useGetTextosQuery,
	useUpdateTextoMutation,
} from ".";

export const useTextoSlice = () => {
	const { data, isLoading, error } = useGetTextosQuery();
	const [addTexto] = useAddTextoMutation();
	const [updateTexto] = useUpdateTextoMutation();

	const getByReference = (reference: string): string =>
		data?.find((t) => t.referencia === reference)?.texto ?? reference;

	return {
		textos: data,
		isLoading,
		error,
		addTexto,
		updateTexto,
		getByReference,
	};
};
