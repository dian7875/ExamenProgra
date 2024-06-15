import { useState, useCallback } from "react";
import { Ruta } from "../Types/Ruta";

const UseGetList = () => {
    const [rutas, setRutas] = useState<Ruta[]>([]);

    const getListRutas = useCallback(async () => {
        try {
            const RutasList = await getListaRutas();
            setRutas(RutasList);
        } catch (error) {
            console.error("Error al cargar datos:", error);
        }
    }, []);
    return {
       getListRutas, rutas,
    };
}

export default UseGetList;