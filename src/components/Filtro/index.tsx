import React, { useState } from "react";
import style from "./Filtro.module.scss";
import useSetFiltro from "../../state/hooks/useSetFiltro";
import { FiltroStatus } from "../../interfaces/FiltroDeEventos";

const Filtro: React.FC = () => {
	const [data, setData] = useState<string>("");
	const [status, setStatus] = useState<FiltroStatus>(FiltroStatus.todos);

	const setFiltro = useSetFiltro();

	const submeterForm = (evento: React.FormEvent<HTMLFormElement>) => {
		evento.preventDefault();
		setFiltro({ data, status });
	};

	return (
		<form className={style.Filtro} onSubmit={submeterForm}>
			<h3 className={style.titulo}>Filtrar</h3>

			<input
				type="date"
				name="data"
				className={style.input}
				onChange={(evento) => setData(evento.target.value)}
				placeholder="Por data"
				value={data || ""}
			/>

			<select
				name="status"
				id="status"
				defaultValue="todos"
				className={style.input}
				onChange={(evento) => setStatus(evento.target.value as FiltroStatus)}
			>
				<option value="todos">todos</option>
				<option value="completo">completos</option>
				<option value="incompleto">incompletos</option>
			</select>

			<button className={style.botao}>Filtrar</button>
		</form>
	);
};

export default Filtro;
