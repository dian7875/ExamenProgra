const urlBase ="https:/localhost:7088/api/"

const getListMenu = async () =>{
    const response = await fetch(`${urlBase}Menu`,);
    const result = await response.json();
    return result;
}

export {getListMenu}


