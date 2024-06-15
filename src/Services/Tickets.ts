
const urlBase = `https://localhost:7066/api`;

const getListaRutas = async () => {
    const response = await fetch(`${urlBase}/ListaRutas`,);
    const result = await response.json();
    return result;
    
}

