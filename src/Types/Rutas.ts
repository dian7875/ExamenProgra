import { UseFormRegister } from "react-hook-form";
import { NewCreateTicket } from "./Ticket";

export type optionsRoutes ={
  id:number,
  value:string
  text:string
}

export interface RegisterOptions {
  register?: UseFormRegister<NewCreateTicket>;
}