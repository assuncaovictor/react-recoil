import { recoilEventos } from "../atom";
import { useSetRecoilState } from "recoil";
import { IEvento } from "../../interfaces/IEvento";

const useAtualizarEvento = () => {
	const setEventos = useSetRecoilState(recoilEventos);

	return (evento: IEvento) =>
		setEventos((listaAntiga) => {
			const indice = listaAntiga.findIndex((evt) => evt.id === evento.id);
			return [...listaAntiga.slice(0, indice), evento, ...listaAntiga.slice(indice + 1)];
		});
};

export default useAtualizarEvento;
