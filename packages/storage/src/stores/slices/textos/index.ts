import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { TextoModelType } from "../../../../../models/src/TextoModel";
import { getApiTextos } from "../../../../../frontend/src/services/apiTextos";

interface TextosState {
	data: TextoModelType[];
	loading: boolean;
	error: string | null;
}

const initialState: TextosState = {
	data: [],
	loading: false,
	error: null,
};

export const fetchTextos = createAsyncThunk(
	"rules/fetchTextos",
	async (_, { rejectWithValue }) => {
		try {
			return getApiTextos();
		} catch (error) {
			return rejectWithValue((error as Error).message);
		}
	},
);

const textosSlice = createSlice({
	name: "textos",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchTextos.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(fetchTextos.fulfilled, (state, action) => {
				state.loading = false;
				state.data = action.payload;
			})
			.addCase(fetchTextos.rejected, (state, action) => {
				state.loading = false;
				state.error = action.payload as string;
			});
	},
});

export default textosSlice.reducer;
