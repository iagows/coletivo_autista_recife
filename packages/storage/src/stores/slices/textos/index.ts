import type { textoType } from "@car/models";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface TextosState {
	data: textoType[];
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
			return [];
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
