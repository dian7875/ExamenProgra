import { NewCreateTicket } from "../../Types/Ticket";

const urlBase ="https://localhost:7088/"

const getListRoutes = async () =>{
    const response = await fetch(`${urlBase}api/Rutas/ListRoutes`,);
    const result = await response.json();
    return result;
}

const verifycapacity = async (Data:NewCreateTicket) => {
    const response = await fetch(`${urlBase}verifycapacity?salida=${Data.departurePoint}&destino=${Data.arrivalPoint}&travelDay=${Data.date}`, {
      method: 'GET',
    });
    if (!response.ok) {
      const errorMessage = await response.text();
      throw new Error(errorMessage);
    }
    return response.json();
  };


  export {getListRoutes, verifycapacity}