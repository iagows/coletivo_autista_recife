import { useAddRegraMutation, useDeleteRegraMutation, useGetRegrasQuery, useUpdateRegraMutation } from ".";

export const useRegraSlice = () => {
	const { data, isLoading: isQueryLoading, error } = useGetRegrasQuery();

	const [addRegra, { isLoading: isAddLoading }] = useAddRegraMutation();
	const [updateRegra, { isLoading: isUpdateLoading }] = useUpdateRegraMutation();
	const [removeRegra, { isLoading: isRemoveLoading }] = useDeleteRegraMutation();

	return {
		addRegra,
		updateRegra,
		removeRegra,
		regras: data || [],
		error: error ? JSON.stringify(error) : undefined,
		isLoading: isQueryLoading || isAddLoading || isUpdateLoading || isRemoveLoading,
	};
};
