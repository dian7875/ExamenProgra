import { useCallback, useState, useEffect } from 'react';
import { getListMenu } from '../../Services/Menu/ServiceMenu';
import { menu } from '../../Types/Menu';

const UseGetMenuElement = () => {
    const [elements, setElements] = useState<menu[]>(() => {
        const savedElements = localStorage.getItem("menu");
        return savedElements ? JSON.parse(savedElements) : [];
    });
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const getBrowserRoutes = useCallback(async () => {
        setIsLoading(true);
        try {
            const elementList = await getListMenu();
            setElements(elementList);
            localStorage.setItem("menu", JSON.stringify(elementList));
        } catch (error) {
            console.error("Error al cargar datos:", error);
        } finally {
            setIsLoading(false);
        }
    }, []);

    useEffect(() => {
        getBrowserRoutes();
    }, [getBrowserRoutes]);

    return {
        elements,
        isLoading
    };
}

export default UseGetMenuElement;
