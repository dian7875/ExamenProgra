import toast from "react-hot-toast";
import { verifycapacity } from "../../Services/Routes/ServiceRoutes";
import { NewCreateTicket } from "../../Types/Ticket";

const UseNewTicket = () => {

    const onSubmit = async (data: NewCreateTicket) => {
        try {
            const info = await verifycapacity(data)
            
            toast.success(info)
        } catch (error: any) {
            const errorMessage = error.message || "Fail to Create Ticket";
            const sameRoute = "El punto de salida y el punto de destino no pueden ser iguales."
            const dateUnavailableMessage = "Se ha alcanzado el límite de tickets para esta ruta y fecha.";
            if (errorMessage.includes(dateUnavailableMessage)) {
                toast.error(dateUnavailableMessage);
            } else if (errorMessage.includes(sameRoute)) {
                toast.error(sameRoute);
            } else {
                toast.error('Please Check The Field')
            }
        }
    }
    return { onSubmit }
};


export default UseNewTicket
