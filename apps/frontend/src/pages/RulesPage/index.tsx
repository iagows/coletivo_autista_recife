import { useRegraSlice } from "@car/storage";
import TextAndGrid from "../../components/TextAndGrid";
import RuleItem from "./RuleItem";

const RulesPage = () => {
	const { data: regras, isLoading } = useRegraSlice();
	return <TextAndGrid textoId="conteudo.descricao_regras" isLoading={isLoading} data={regras} renderer={RuleItem} />;
};

export default RulesPage;
