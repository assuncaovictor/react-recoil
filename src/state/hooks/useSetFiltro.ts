import { useSetRecoilState } from "recoil";
import { filtroDeEventos } from "../atom";

const useSetFiltro = () => {
	const setFiltro = useSetRecoilState(filtroDeEventos);

	return (data: string) => {
		if (!data) {
			setFiltro({ data: null });
			return;
		}

		setFiltro({ data: new Date(data) });
	};
};

export default useSetFiltro;
