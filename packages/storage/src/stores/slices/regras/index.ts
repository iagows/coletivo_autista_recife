import type { regraType } from "@car/models";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface RulesState {
	data: regraType[];
	loading: boolean;
	error: string | null;
}

const initialState: RulesState = {
	data: [],
	loading: false,
	error: null,
};

export const fetchRules = createAsyncThunk(
	"rules/fetchRules",
	async (_, { rejectWithValue }) => {
		try {
			return [];
		} catch (error) {
			return rejectWithValue((error as Error).message);
		}
	},
);

const rulesSlice = createSlice({
	name: "rules",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchRules.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(fetchRules.fulfilled, (state, action) => {
				state.loading = false;
				state.data = action.payload;
			})
			.addCase(fetchRules.rejected, (state, action) => {
				state.loading = false;
				state.error = action.payload as string;
			});
	},
});

export default rulesSlice.reducer;
