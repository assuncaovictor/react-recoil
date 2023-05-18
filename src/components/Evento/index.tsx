import React from "react";
import { IEvento } from "../../interfaces/IEvento";
import style from "./Evento.module.scss";
import EventoCheckbox from "./EventoCheckbox";
import useDeletarEvento from "../../state/hooks/useDeletarEvento";

const Evento: React.FC<{ evento: IEvento }> = ({ evento }) => {
	const estilos = [style.Evento];
	const deletarEvento = useDeletarEvento();

	if (evento.completo) {
		estilos.push(style.completo);
	}

	const aoDeletarEvento = () => {
		deletarEvento(evento);
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
