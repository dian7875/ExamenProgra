
const urlBase = `https://localhost:7088/api`;

const getListaRutas = async () => {
    console.log('test')
    const response = await fetch(`${urlBase}/Rutas`,);
    const result = await response.json();
    return result;

}

export default getListaRutas