import {
	useAddTextoMutation,
	useGetTextosQuery,
	useUpdateTextoMutation,
} from ".";

export const useTextoSlice = () => {
	const { data, isLoading: isQueryLoading, error } = useGetTextosQuery();
	const [addTexto, { isLoading: isAddLoading }] = useAddTextoMutation();
	const [updateTexto, { isLoading: isUpdateLoading }] =
		useUpdateTextoMutation();

	const getByReference = (reference: string): string =>
		data?.find((t) => t.referencia === reference)?.texto ?? reference;

	return {
		textos: data,
		isLoading: isQueryLoading || isAddLoading || isUpdateLoading,
		error: error ? JSON.stringify(error) : undefined,
		addTexto,
		updateTexto,
		getByReference,
	};
};
