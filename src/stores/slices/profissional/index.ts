import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { ProfissionalModelType } from "../../../models/ProfissionalModel";
import { getApiProfissionais } from "../../../services/apiProfissionais";
import type { PlanoModelType } from "../../../models/PlanoModel";
import type { EspecialidadeModelType } from "../../../models/EspecialidadeModel";
import type { EnderecoModelType } from "../../../models/EnderecoModel";
import type { LinkModelType } from "../../../models/LinkModel";
import type { TelefoneModelType } from "../../../models/TelefoneModel";

interface ProfState {
	data: {
		profissional: ProfissionalModelType;
		planos: PlanoModelType[];
		especialidades: EspecialidadeModelType[];
		enderecos: EnderecoModelType[];
		links: LinkModelType[];
		telefones: TelefoneModelType[];
	}[];
	loading: boolean;
	error: string | null;
	lastUpdated: string | null;
}

const initialState: ProfState = {
	data: [],
	loading: false,
	error: null,
	lastUpdated: null,
};

export const fetchProfissionais = createAsyncThunk(
	"prof/fetchProfissionais",
	async (_, { rejectWithValue }) => {
		try {
			return getApiProfissionais();
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
				state.lastUpdated = new Date().toISOString();
			})
			.addCase(fetchProfissionais.rejected, (state, action) => {
				state.loading = false;
				state.error = action.payload as string;
			});
	},
});

export default profissionaisSlice.reducer;
