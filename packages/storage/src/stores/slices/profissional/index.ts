import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { ProfissionalModelType } from "../../../../../models/src/ProfissionalModel";
import { getApiProfissionais } from "../../../../../frontend/src/services/apiProfissionais";
import type { PlanoModelType } from "../../../../../models/src/PlanoModel";
import type { EspecialidadeModelType } from "../../../../../../backup/src/models/EspecialidadeModel";
import type { EnderecoModelType } from "../../../../../../backup/src/models/EnderecoModel";
import type { LinkModelType } from "../../../../../models/src/LinkModel";
import type { TelefoneModelType } from "../../../../../models/src/TelefoneModel";

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
			})
			.addCase(fetchProfissionais.rejected, (state, action) => {
				state.loading = false;
				state.error = action.payload as string;
			});
	},
});

export default profissionaisSlice.reducer;
