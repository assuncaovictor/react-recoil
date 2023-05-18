import { IEvento } from "../../interfaces/IEvento";
import useRecoilEventos from "./useRecoilEventos";

const useAdicionarEvento = () => {
	const { setEventos } = useRecoilEventos();

	return (evento: IEvento) => {
		const hoje = new Date();

		if (evento.inicio < hoje) {
			throw new Error("A data de inicio não pode ser menor do que a data atual");
		}

		evento.id = new Date().getTime();
		return setEventos((listaAntiga) => [...listaAntiga, evento]);
	};
};

export default useAdicionarEvento;
