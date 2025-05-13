import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQueryToken } from "../baseQuery";
import type { textoType } from "@car/models";

const TEXTO_TAG = ["Texto"];
const TEXTO_EP = "/texto";
const TEXTO_EP_SLASH = `${TEXTO_EP}/`;

export const textoApi = createApi({
	reducerPath: "textoApi",
	baseQuery: baseQueryToken,
	tagTypes: TEXTO_TAG,
	endpoints: (builder) => ({
		getTextos: builder.query<textoType[], void>({
			query: () => TEXTO_EP,
			providesTags: TEXTO_TAG,
		}),
		addTexto: builder.mutation<textoType, textoType>({
			query: (body) => ({
				url: TEXTO_EP,
				method: "POST",
				body,
			}),
			invalidatesTags: TEXTO_TAG,
		}),
		updateTexto: builder.mutation<textoType, textoType>({
			query: ({ id, ...body }) => ({
				url: `${TEXTO_EP_SLASH}${id}`,
				method: "PUT",
				body,
			}),
			invalidatesTags: TEXTO_TAG,
		}),
		deleteTexto: builder.mutation<void, string>({
			query: (id) => ({
				url: `${TEXTO_EP_SLASH}${id}`,
				method: "DELETE",
			}),
			invalidatesTags: TEXTO_TAG,
		}),
	}),
});

export const {
	useGetTextosQuery,
	useAddTextoMutation,
	useUpdateTextoMutation,
	useDeleteTextoMutation,
} = textoApi;
