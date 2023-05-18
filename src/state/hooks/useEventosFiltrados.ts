import { useRecoilValue } from "recoil";
import { filtroDeEventos } from "../atom";
import useRecoilEventos from "./useRecoilEventos";

const useEventosFiltrados = () => {
	const filtro = useRecoilValue(filtroDeEventos);
	const { eventos } = useRecoilEventos();

	return eventos.filter((evento) => {
		const asDatasSaoIguais = evento.inicio.toISOString().slice(0, 10) === filtro.data?.toISOString().slice(0, 10);
		return !filtro.data || asDatasSaoIguais;
	});
};

export default useEventosFiltrados;
