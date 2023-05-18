import { selector } from "recoil";
import { filtroDeEventos, recoilEventos } from "../atom";

const eventosFiltradosState = selector({
	key: "eventosFiltradosState",
	get: ({ get }) => {
		const filtro = get(filtroDeEventos);
		const eventos = get(recoilEventos);

		return eventos.filter((evento) => {
			const asDatasSaoIguais = evento.inicio.toISOString().slice(0, 10) === filtro.data?.toISOString().slice(0, 10);
			return !filtro.data || asDatasSaoIguais;
		});
	},
});

export default eventosFiltradosState;
