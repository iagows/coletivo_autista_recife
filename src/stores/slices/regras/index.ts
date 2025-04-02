import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { RulesModelType } from "../../../models/RuleModel";
import RulesModel from "../../../models/RuleModel";
import { Pages, getSheet } from "../../../services/api";

interface RulesState {
	data: RulesModelType[];
	loading: boolean;
	error: string | null;
	lastUpdated: string | null;
}

const initialState: RulesState = {
	data: [],
	loading: false,
	error: null,
	lastUpdated: null,
};

export const fetchRules = createAsyncThunk(
	"rules/fetchRules",
	async (_, { rejectWithValue }) => {
		try {
			// Usa o modelo para fazer o parse de cada item
			const rules = await getSheet(Pages.REGRAS, (data) =>
				RulesModel.parse({
					id: Number(data.id),
					texto: String(data.texto),
					atualizacao: String(data.atualizacao),
					detalhamento: data.detalhamento
						? String(data.detalhamento)
						: undefined,
				}),
			);
			return rules;
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
				state.lastUpdated = new Date().toISOString();
			})
			.addCase(fetchRules.rejected, (state, action) => {
				state.loading = false;
				state.error = action.payload as string;
			});
	},
});

export default rulesSlice.reducer;
