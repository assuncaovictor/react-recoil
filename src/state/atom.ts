import { atom } from "recoil";
import { IEvento } from "../interfaces/IEvento";
import { FiltroDeEventos } from "../interfaces/FiltroDeEventos";

export const recoilEventos = atom<IEvento[]>({
	key: "eventos",
	default: [
		{
			descricao: "Estudar React",
			inicio: new Date("2023-05-16T09:00"),
			fim: new Date("2023-05-16T13:00"),
			completo: false,
			id: 1642342747,
		},
		{
			descricao: "Estudar Recoil",
			inicio: new Date("2023-05-17T09:00"),
			fim: new Date("2023-05-17T11:00"),
			completo: false,
			id: 1642342959,
		},
	],
});

export const filtroDeEventos = atom<FiltroDeEventos>({
	key: "filtro",
	default: {},
});
