import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import { EnvVar } from "../../util";

export const baseQueryToken = fetchBaseQuery({
	baseUrl: EnvVar.api.url,
	prepareHeaders: (headers) => {
		const token = localStorage.getItem("authToken");
		if (token) headers.set("Authorization", `Bearer ${token}`);
		return headers;
	},
});
