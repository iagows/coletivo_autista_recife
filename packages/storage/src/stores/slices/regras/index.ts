import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { RulesModelType } from "../../../../../models/src/RuleModel";
import { getApiRules } from "../../../../../frontend/src/services/apiRules";

interface RulesState {
	data: RulesModelType[];
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
			return getApiRules();
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
