import {
	useAddRegraMutation,
	useDeleteRegraMutation,
	useGetRegrasQuery,
	useUpdateRegraMutation,
} from ".";

export const useRegraSlice = () => {
	const { data: regras, isLoading, error } = useGetRegrasQuery();
	const [addRegra] = useAddRegraMutation();
	const [updateRegra] = useUpdateRegraMutation();
	const [deleteRegra] = useDeleteRegraMutation();

	return {
		regras,
		isLoading,
		error,
		addRegra,
		updateRegra,
		deleteRegra,
	};
};
