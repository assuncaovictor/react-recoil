import { IEvento } from "../../interfaces/IEvento";
import useRecoilEventos from "./useRecoilEventos";

const useDeletarEvento = () => {
	const { setEventos } = useRecoilEventos();

	return (evento: IEvento) => {
		return setEventos((listaAntiga) => listaAntiga.filter((evt) => evt.id !== evento.id));
	};
};

export default useDeletarEvento;
