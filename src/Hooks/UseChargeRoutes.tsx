import { useState, useCallback } from "react";
import getListaRutas from "../Services/Tickets";
import { Tiket } from "../Types/Ticket";

const UseGetList = () => {
    const [rutas, setRutas] = useState<Tiket[]>([]);

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