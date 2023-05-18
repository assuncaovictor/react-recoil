import { recoilEventos } from "../atom";
import { useRecoilValue, useSetRecoilState } from "recoil";
import eventosFiltradosState from "../seletores/eventosFiltradosState";

const useRecoilEventos = () => {
	const eventos = useRecoilValue(eventosFiltradosState);
	const setEventos = useSetRecoilState(recoilEventos);

	return { eventos, setEventos };
};

export default useRecoilEventos;
