import React from "react";
import { IEvento } from "../../interfaces/IEvento";
import style from "./Evento.module.scss";
import EventoCheckbox from "./EventoCheckbox";
import { useSetRecoilState } from "recoil";
import { recoilEventos } from "../../state/atom";

const Evento: React.FC<{ evento: IEvento }> = ({ evento }) => {
	const estilos = [style.Evento];

	const setEventos = useSetRecoilState(recoilEventos);

	if (evento.completo) {
		estilos.push(style.completo);
	}

	const aoDeletarEvento = () => {
		setEventos((prev) => {
			return prev.filter((eventoAnterior) => eventoAnterior.id !== evento.id);
		});
	};

	return (
		<div className={estilos.join(" ")}>
			<EventoCheckbox evento={evento} />
			<div className="cards-info">
				<h3 className={style.descricao}>
					{evento.descricao} - {evento.inicio.toLocaleDateString()}
				</h3>
			</div>
			<i className="far fa-times-circle fa-2x" onClick={aoDeletarEvento}></i>
		</div>
	);
};

export default Evento;
