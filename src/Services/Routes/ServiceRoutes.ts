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
  const GeneralReport = async (start:string, end:string, arrival:string, departure:string) => {
    const response = await fetch(`${urlBase}TravelMoneyCountByDateAndRoute?departurePoint=${departure}&arrivalPoint=${arrival}&startDate=${start}&endDate=${end}`, {
      method: 'GET',
    });
    if (!response.ok) {
      const errorMessage = await response.text();
      throw new Error(errorMessage);
    }
    return response.json();
  };
  const RouteReport = async (arrival:string, departure:string) => {
    const response = await fetch(`${urlBase}TravelMoneyByRoute?departurePoint=${departure}&arrivalPoint=${arrival}`, {
      method: 'GET',
    });
    if (!response.ok) {
      const errorMessage = await response.text();
      throw new Error(errorMessage);
    }
    return response.json();
  };
  const DatesReport = async (start:string, end:string) => {
    const response = await fetch(`${urlBase}TravelMoneyByDateRange?startDate=${start}&endDate=${end}`, {
      method: 'GET',
    });
    if (!response.ok) {
      const errorMessage = await response.text();
      throw new Error(errorMessage);
    }
    return response.json();
  };



  export {getListRoutes, verifycapacity, GeneralReport, DatesReport, RouteReport}