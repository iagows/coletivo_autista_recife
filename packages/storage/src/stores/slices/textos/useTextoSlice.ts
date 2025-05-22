import { useAddTextoMutation, useGetTextosQuery, useUpdateTextoMutation, useDeleteTextoMutation } from ".";

export const useTextoSlice = () => {
	const { data, isLoading: isQueryLoading, error } = useGetTextosQuery();
	const [addTexto, { isLoading: isAddLoading }] = useAddTextoMutation();
	const [updateTexto, { isLoading: isUpdateLoading }] = useUpdateTextoMutation();
	const [removeTexto, { isLoading: isDeleteLoading }] = useDeleteTextoMutation();

	const getByReference = (reference: string): string =>
		data?.find((t) => t.referencia === reference)?.texto ?? reference;

	return {
		data: data || [],
		isLoading: isQueryLoading || isAddLoading || isUpdateLoading || isDeleteLoading,
		error: error ? JSON.stringify(error) : undefined,
		addTexto,
		updateTexto,
		removeTexto,
		getByReference,
	};
};
