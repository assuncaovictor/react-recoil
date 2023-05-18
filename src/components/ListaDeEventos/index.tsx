import React from "react";
import Evento from "../Evento";
import Filtro from "../Filtro";
import style from "./ListaDeEventos.module.scss";
import useRecoilEventos from "../../state/hooks/useRecoilEventos";

const ListaDeEventos: React.FC<{
	aoFiltroAplicado: (data: Date | null) => void;
}> = ({ aoFiltroAplicado }) => {
	const { eventos } = useRecoilEventos();

	return (
		<section>
			<Filtro aoFiltroAplicado={aoFiltroAplicado} />
			<div className={style.Scroll}>
				{eventos.map((evento) => (
					<Evento evento={evento} key={evento.id} />
				))}
			</div>
		</section>
	);
};

export default ListaDeEventos;
