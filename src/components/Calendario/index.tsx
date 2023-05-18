import React from "react";
import style from "./Calendario.module.scss";
import ptBR from "./localizacao/ptBR.json";
import Kalend, { CalendarEvent, CalendarView, OnEventDragFinish } from "kalend";
import "kalend/dist/styles/index.css";
import { useRecoilValue } from "recoil";
import { recoilEventos } from "../../state/atom";
import { IEvento } from "../../interfaces/IEvento";
import useAtualizarEvento from "../../state/hooks/useAtualizarEvento";

interface IKalendEvento {
	id?: number;
	startAt: string;
	endAt: string;
	summary: string;
	color: string;
}

const Calendario: React.FC = () => {
	const eventos = useRecoilValue(recoilEventos);
	const atulizarEvento = useAtualizarEvento();

	const eventosKalend = new Map<string, IKalendEvento[]>();

	eventos.forEach((evento) => {
		const chave = evento.inicio.toISOString().slice(0, 10);

		const valor: IKalendEvento = {
			id: evento.id,
			startAt: evento.inicio.toISOString(),
			endAt: evento.fim.toISOString(),
			summary: evento.descricao,
			color: "blue",
		};

		if (!eventosKalend.has(chave)) {
			return eventosKalend.set(chave, [valor]);
		}

		return eventosKalend.get(chave)?.push(valor);
	});

	const onEventDragFinish: OnEventDragFinish = (prevEvent: CalendarEvent, updatedEvent: CalendarEvent, events: any) => {
		const evento = eventos.find((evento) => evento.descricao === prevEvent.summary);

		if (!evento) {
			return;
		}

		const eventoAtualizado: IEvento = {
			...evento,
			fim: new Date(updatedEvent.endAt),
			inicio: new Date(updatedEvent.endAt),
		};

		atulizarEvento(eventoAtualizado);
	};

	return (
		<div className={style.Container}>
			<Kalend
				events={Object.fromEntries(eventosKalend)}
				initialDate={new Date().toISOString()}
				hourHeight={60}
				initialView={CalendarView.WEEK}
				timeFormat={"24"}
				weekDayStart={"Monday"}
				calendarIDsHidden={["work"]}
				language={"customLanguage"}
				customLanguage={ptBR}
				onEventDragFinish={onEventDragFinish}
			/>
		</div>
	);
};

export default Calendario;
