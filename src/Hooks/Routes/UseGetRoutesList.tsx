import { useCallback, useEffect, useState } from 'react'
import { optionsRoutes } from '../../Types/Rutas';
import { getListRoutes } from '../../Services/Routes/ServiceRoutes';

const UseGetRoutesList = () => {
    const [routes, setRoutes] = useState<optionsRoutes[]>([])
    const getRoutesList = useCallback(async () => {
        try {
            const routesList:[] = await getListRoutes();
            const mapRoutes = routesList.map((Routes, index) => ({
                id: index,
                value: Routes,
                text: `Point ${Routes}`

            }));
            setRoutes(mapRoutes);
        } catch (error) {
            console.error("Error al cargar rutas:", error);
        }
    }, []);

    useEffect(() => {
        getRoutesList();
    }, [getRoutesList]);

    const Options = useCallback(() => {
        return routes.map((Routes) => (
            <option key={Routes.id} value={Routes.value}>{Routes.text}</option>
        ));
    }, [routes]);

    return {
        Options
    }
}

export default UseGetRoutesList
