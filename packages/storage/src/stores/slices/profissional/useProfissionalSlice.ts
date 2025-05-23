import {
	useGetProfissionaisQuery,
	useAddProfissionalMutation,
	useDeleteProfissionalMutation,
	useUpdateProfissionalMutation,
} from ".";

export const useProfissionalSlice = () => {
	const { data, isLoading: isQueryLoading, error } = useGetProfissionaisQuery();

	const [addProfissional, { isLoading: isAddLoading }] = useAddProfissionalMutation();
	const [updateProfissional, { isLoading: isUpdateLoading }] = useUpdateProfissionalMutation();
	const [removeProfissional, { isLoading: isRemoveLoading }] = useDeleteProfissionalMutation();

	return {
		addProfissional,
		updateProfissional,
		removeProfissional,
		data: data || [],
		error: error ? JSON.stringify(error) : undefined,
		isLoading: isQueryLoading || isAddLoading || isUpdateLoading || isRemoveLoading,
	};
};
