import { recoilEventos } from "../atom";
import { useRecoilState } from "recoil";

const useRecoilEventos = () => {
	const [eventos, setEventos] = useRecoilState(recoilEventos);

	return { eventos, setEventos };
};

export default useRecoilEventos;
