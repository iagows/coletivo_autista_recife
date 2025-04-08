import TextoModel, { type TextoModelType } from "../models/TextoModel";
import { Pages, getSheet } from "./api";

export const getApiTextos = async (): Promise<TextoModelType[]> => {
	return await getSheet(Pages.TEXTOS, TextoModel.parse);
};
