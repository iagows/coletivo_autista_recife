import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQueryToken } from "../baseQuery";
import type { regraType } from "@car/models";

const REGRA_TAG = ["Regra"];
const REGRA_EP = "/regra";
const REGRA_EP_SLASH = `${REGRA_EP}/`;

export const regraApi = createApi({
	reducerPath: "regraApi",
	baseQuery: baseQueryToken,
	tagTypes: REGRA_TAG,
	endpoints: (builder) => ({
		getRegras: builder.query<regraType[], void>({
			query: () => REGRA_EP,
			providesTags: REGRA_TAG,
		}),
		addRegra: builder.mutation<regraType, regraType>({
			query: (body) => ({
				url: REGRA_EP,
				method: "POST",
				body,
			}),
			invalidatesTags: REGRA_TAG,
		}),
		updateRegra: builder.mutation<regraType, regraType>({
			query: ({ id, ...body }) => ({
				url: `${REGRA_EP_SLASH}${id}`,
				method: "PUT",
				body,
			}),
			invalidatesTags: REGRA_TAG,
		}),
		deleteRegra: builder.mutation<void, string>({
			query: (id) => ({
				url: `${REGRA_EP_SLASH}${id}`,
				method: "DELETE",
			}),
			invalidatesTags: REGRA_TAG,
		}),
	}),
});

export const {
	useGetRegrasQuery,
	useAddRegraMutation,
	useUpdateRegraMutation,
	useDeleteRegraMutation,
} = regraApi;
