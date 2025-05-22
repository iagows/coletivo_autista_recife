import { useRegraSlice } from "@car/storage";
import TextAndGrid from "../../components/TextAndGrid";
import type { regraType } from "@car/models";

type Props = {
	item: regraType;
};
const Rule = ({ item }: Props) => {
	return (
		<>
			{item.texto}, {item.descricao}
		</>
	);
};

const RulesPage = () => {
	const { data: regras, isLoading } = useRegraSlice();
	return <TextAndGrid textoId="conteudo.descricao_regras" isLoading={isLoading} data={regras} renderer={Rule} />;
};

export default RulesPage;
