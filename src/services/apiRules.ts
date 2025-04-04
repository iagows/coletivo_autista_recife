import RulesModel, { type RulesModelType } from "../models/RuleModel";
import { Pages, getSheet } from "./api";

export const getApiRules = async (): Promise<RulesModelType[]> => {
	return await getSheet(Pages.REGRAS, RulesModel.parse);
};
