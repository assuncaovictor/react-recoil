import { selector } from "recoil";
import { filtroDeEventos, recoilEventos } from "../atom";
import { FiltroStatus } from "../../interfaces/FiltroDeEventos";

const eventosFiltradosState = selector({
	key: "eventosFiltradosState",
	get: ({ get }) => {
		const filtro = get(filtroDeEventos);
		const eventos = get(recoilEventos);

		return eventos.filter((evento) => {
			const asDatasSaoIguais =
				filtro.data === null || evento.inicio.toISOString().slice(0, 10) === filtro.data?.toISOString().slice(0, 10);

			const oStatusEoMesmo =
				filtro.status === FiltroStatus.todos ||
				(evento.completo ? filtro.status === FiltroStatus.completo : filtro.status === FiltroStatus.incompleto);

			return asDatasSaoIguais && oStatusEoMesmo;
		});
	},
});

export default eventosFiltradosState;
