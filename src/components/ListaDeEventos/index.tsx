import React from "react";
import Evento from "../Evento";
import Filtro from "../Filtro";
import style from "./ListaDeEventos.module.scss";
import useEventosFiltrados from "../../state/hooks/useEventosFiltrados";

const ListaDeEventos: React.FC = () => {
	const eventos = useEventosFiltrados();

	return (
		<section>
			<Filtro />
			<div className={style.Scroll}>
				{eventos.map((evento) => (
					<Evento evento={evento} key={evento.id} />
				))}
			</div>
		</section>
	);
};

export default ListaDeEventos;
