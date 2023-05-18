import { useSetRecoilState } from "recoil";
import { filtroDeEventos } from "../atom";
import { FiltroStatus } from "../../interfaces/FiltroDeEventos";

const useSetFiltro = () => {
	const setFiltro = useSetRecoilState(filtroDeEventos);

	return ({ data, status }: { data: string; status: FiltroStatus }) => {
		setFiltro({ data: data?.length !== 0 ? new Date(data) : null, status });
	};
};

export default useSetFiltro;
