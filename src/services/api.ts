type StringNumber = string | number;

interface RawHeader {
	label: string;
	id: string;
	type?: string;
}

interface RawRow {
	c: Array<{
		v: StringNumber;
		f?: string;
	}>;
}

interface Sheet {
	version: string;
	reqId: string;
	status: string;
	sig: string;
	table: {
		cols: RawHeader[];
		rows: RawRow[];
		parsedNumHeaders: number;
	};
}

interface Column {
	index: number;
	label: string;
	type?: string;
}

const getURL = (sheetId: string, sheetName: string) =>
	`https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?tqx=out:json&sheet=${sheetName}`;

const ID = "1aCvDAKDmHYUvOHos4bh4GdDr1Yf7yx70q-f4L88Qg48";

export enum Pages {
	REGRAS = "regras",
	ESPECIALIDADES = "especialidades",
	PROFISSIONAIS = "profissionais",
	PLANOS = "planos",
	CONSELHOS = "conselhos",
	ENDERECOS = "enderecos",
	TELEFONE = "telefones",
	LINKS = "links",
	PLAN_PROF = "plano_prof",
	ESPEC_PROF = "espec_prof",
}

// Cache para armazenar respostas já obtidas
const sheetCache = new Map<Pages, Record<string, unknown>[]>();

const parseSheet = (input: string): Sheet => {
	try {
		return JSON.parse(input.substring(47, input.length - 2));
	} catch (error) {
		throw new Error(`Failed to parse sheet: ${(error as Error).message}`);
	}
};

const getColumns = (json: Sheet): Column[] =>
	json.table.cols.map((c, i) => ({
		index: i,
		label: c.label,
		type: c.type,
	}));

const getRows =
	(columns: Column[]) =>
	(json: Sheet): Record<string, StringNumber>[] => {
		const rows: Record<string, StringNumber>[] = [];

		for (const { c } of json.table.rows) {
			const obj: Record<string, StringNumber> = {};
			for (let i = 0; i < c.length; i++) {
				if (c[i]?.v !== undefined) {
					obj[columns[i].label] = c[i].v;
				}
			}
			rows.push(obj);
		}

		return rows;
	};

export const getSheet = async <T>(
	pageName: Pages,
	parser: (data: Record<string, unknown>) => T,
): Promise<T[]> => {
	try {
		if (sheetCache.has(pageName)) {
			// biome-ignore lint/style/noNonNullAssertion: <explanation>
			return sheetCache.get(pageName)!.map(parser);
		}

		const response = await fetch(getURL(ID, pageName));
		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`);
		}

		const text = await response.text();
		const json = parseSheet(text);
		const columns = getColumns(json);
		const rows = getRows(columns)(json);

		const result = rows.map(parser);

		// Armazenar no cache
		sheetCache.set(pageName, rows);

		return result;
	} catch (error) {
		console.error(`Erro ao buscar dados de '${pageName}':`, error);
		return [];
	}
};
