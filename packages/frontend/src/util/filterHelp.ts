type IdAble = {
	id: number;
};

type Item<T extends string> = {
	[key in T]: number;
};

type Relation<T extends string, U extends string> = Item<T> & Item<U>;

/**
 * Função que cria um filtro para uma lista de objetos que possuem um campo `id`.
 *
 * @param list - A lista de objetos do tipo `IdAble`, onde cada objeto deve ter um campo `id` do tipo `number`.
 *
 * @returns Uma função que aceita três parâmetros:
 *
 * - `relations`: Um array de objetos do tipo `Relation<T, U>`, onde cada objeto representa uma relação entre dois IDs.
 *   Os campos da relação são definidos por `T` e `U`, que são strings representando os nomes dos campos que contêm os IDs.
 *
 * - `idA`: Uma string que representa o nome do campo no objeto de relação que corresponde ao ID da primeira lista (`list`).
 *
 * - `idB`: Uma string que representa o nome do campo no objeto de relação que corresponde ao ID da segunda lista.
 *
 * A função retornada aceita um parâmetro:
 *
 * - `id`: O ID do objeto na lista `list` que será usado para filtrar as relações.
 *
 * A função retornada filtra a lista `list` e retorna apenas os objetos cujo `id` está presente nas relações associadas ao `id` fornecido.
 *
 * @example
 * const listaA = [{ id: 1 }, { id: 2 }, { id: 3 }];
 * const relations = [{ id_a: 1, id_b: 10 }, { id_a: 1, id_b: 20 }, { id_a: 2, id_b: 30 }];
 *
 * const filterByRelation = getRelation(listaA);
 * const resultado = filterByRelation(relations, 'id_a', 'id_b')(1);
 * console.log(resultado); // Saída: [{ id: 10 }, { id: 20 }]
 */
export const getRelation =
	(list: IdAble[]) =>
	<T extends string, U extends string>(
		relations: Relation<T, U>[],
		idA: T,
		idB: U,
	) =>
	(id: number) => {
		const remainingIds: number[] = relations
			.filter((ep) => ep[idA] === id)
			.map((ep) => ep[idB]);

		return list.filter((e) => remainingIds.includes(e.id));
	};

export const getFromListBySomeId =
	<T extends string>(list: Item<T>[], key: T) =>
	(id: number): Item<T>[] =>
		list.filter((l) => l[key] === id);
