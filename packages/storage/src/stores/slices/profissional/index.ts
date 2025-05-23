import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQueryToken } from "../baseQuery";
import type { profissionalType } from "@car/models";

const PROFISSIONAL_TAG = ["Profissional"];
const PROFISSIONAL_EP = "/profissional";
const PROFISSIONAL_EP_SLASH = `${PROFISSIONAL_EP}/`;

type IdLess = Omit<profissionalType, "id">;

export const profissionalApi = createApi({
	reducerPath: "profissionalApi",
	baseQuery: baseQueryToken,
	tagTypes: PROFISSIONAL_TAG,
	endpoints: (builder) => ({
		getProfissionais: builder.query<profissionalType[], void>({
			query: () => PROFISSIONAL_EP,
			providesTags: PROFISSIONAL_TAG,
		}),
		addProfissional: builder.mutation<profissionalType, IdLess>({
			query: (body) => ({
				url: PROFISSIONAL_EP,
				method: "POST",
				body,
			}),
			invalidatesTags: PROFISSIONAL_TAG,
		}),
		updateProfissional: builder.mutation<profissionalType, profissionalType>({
			query: ({ id, ...body }) => ({
				url: `${PROFISSIONAL_EP_SLASH}${id}`,
				method: "PUT",
				body,
			}),
			invalidatesTags: PROFISSIONAL_TAG,
		}),
		deleteProfissional: builder.mutation<void, string>({
			query: (id) => ({
				url: `${PROFISSIONAL_EP_SLASH}${id}`,
				method: "DELETE",
			}),
			invalidatesTags: PROFISSIONAL_TAG,
		}),
	}),
});

export const {
	useGetProfissionaisQuery,
	useAddProfissionalMutation,
	useUpdateProfissionalMutation,
	useDeleteProfissionalMutation,
} = profissionalApi;
