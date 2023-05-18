export enum FiltroStatus {
	todos = "todos",
	completo = "completo",
	incompleto = "incompleto",
}

export interface FiltroDeEventos {
	data?: Date | null;
	status: FiltroStatus;
}
