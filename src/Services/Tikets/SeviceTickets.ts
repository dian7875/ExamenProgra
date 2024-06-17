import { NewCreateTicket } from "../../Types/Ticket";

const urlBase ="https:/localhost:7088/api/"

const createTicket = async (Data: NewCreateTicket) => {

    const response = await fetch(`${urlBase}Tickets`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(Data),
    });
  
    if (!response.ok) {
      const errorMessage = await response.text();
      throw new Error(errorMessage);
    }
    return response.status
  };

  export {createTicket}