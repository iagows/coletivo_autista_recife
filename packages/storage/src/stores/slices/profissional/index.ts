import type { ProfissionalContractType } from "@car/models";
import type { EnderecoModelType } from "@car/models/src/models/EnderecoModel";
import type { EspecialidadeModelType } from "@car/models/src/models/EspecialidadeModel";
import type { LinkModelType } from "@car/models/src/models/LinkModel";
import type { PlanoModelType } from "@car/models/src/models/PlanoModel";
import type { TelefoneModelType } from "@car/models/src/models/TelefoneModel";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface ProfState {
	data: {
		profissional: ProfissionalContractType;
		planos: PlanoModelType[];
		especialidades: EspecialidadeModelType[];
		enderecos: EnderecoModelType[];
		links: LinkModelType[];
		telefones: TelefoneModelType[];
	}[];
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
