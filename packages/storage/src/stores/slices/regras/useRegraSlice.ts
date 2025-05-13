import {
	useAddRegraMutation,
	useDeleteRegraMutation,
	useGetRegrasQuery,
	useUpdateRegraMutation,
} from ".";

export const useRegraSlice = () => {
	const { data, isLoading, error } = useGetRegrasQuery();
	const [addRegra] = useAddRegraMutation();
	const [updateRegra] = useUpdateRegraMutation();
	const [deleteRegra] = useDeleteRegraMutation();

	return {
		regras: data,
		isLoading,
		error,
		addRegra,
		updateRegra,
		deleteRegra,
	};
};
