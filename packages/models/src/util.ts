import {
	type Static,
	type TObject,
	type TProperties,
	Type,
} from "@sinclair/typebox";

export const omitFieldFromDTO = <
	T extends TObject<TProperties>,
	K extends keyof Static<T>,
>(
	schema: T,
	field: K,
): TObject<Omit<T["properties"], K>> => {
	const fieldStr = field as string;
	const properties = { ...schema.properties };
	delete properties[fieldStr];

	return Type.Object(properties as Omit<T["properties"], K>);
};
