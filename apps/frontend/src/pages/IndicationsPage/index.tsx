import { useProfissionalSlice } from "@car/storage";
import TextAndGrid from "../../components/TextAndGrid";
import IndicationItem from "./IndicationItem";

const IndicacoesPage = () => {
	const { data: profissionais, isLoading } = useProfissionalSlice();
	return (
		<TextAndGrid
			isLoading={isLoading}
			renderer={IndicationItem}
			textoId="conteudo.descricao_indicacoes"
			data={profissionais.filter((p) => !p.isConsultorioEscola)}
		/>
	);
};

export default IndicacoesPage;
