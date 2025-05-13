import type { profissionalType } from "@car/models";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface ProfState {
	data: profissionalType[];
	loading: boolean;
	error: string | null;
}

const initialState: ProfState = {
	data: [],
	loading: false,
	error: null,
};

export const fetchProfissionais = createAsyncThunk(
	"prof/fetchProfissionais",
	async (_, { rejectWithValue }) => {
		try {
			return [];
		} catch (error) {
			return rejectWithValue((error as Error).message);
		}
	},
);

const profissionaisSlice = createSlice({
	name: "prof",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchProfissionais.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(fetchProfissionais.fulfilled, (state, action) => {
				state.loading = false;
				state.data = action.payload;
			})
			.addCase(fetchProfissionais.rejected, (state, action) => {
				state.loading = false;
				state.error = action.payload as string;
			});
	},
});

export default profissionaisSlice.reducer;
