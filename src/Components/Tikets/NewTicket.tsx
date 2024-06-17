import { Datepicker } from "flowbite-react"
import ListTravelRoutes from "../ListTravelRoutes"
import { useForm } from "react-hook-form"
import { NewCreateTicket } from "../../Types/Ticket"
import UseNewTicket from "../../Hooks/Tickets/UseNewTicket"

const NewTicket = () => {
    const{register, handleSubmit, setValue}=useForm<NewCreateTicket>()
    const {onSubmit}=UseNewTicket();

    const handleDateChange = (date:Date) => {

        const format = date.toISOString().split('T')[0]
        console.log(format)

        setValue('date',format)
      };
    
    return (
        <>
            <div className=" pt-10">
                <form onSubmit={handleSubmit(onSubmit)} className="flex justify-center items-center flex-col gap-8 w-full">
                    <div className="flex items-center justify-center gap-5 w-full">
                        <ListTravelRoutes register={register} />
                    </div>
                    <div className="w-1/4 flex flex-col gap-4">
                        <span className="text-2xl text-center">Travel Date</span>
                        <Datepicker onSelectedDateChanged={handleDateChange}/>
                    </div>
                    <div className="w-full flex justify-center">
                        <button
                            className={`bg-white w-1/4 text-center text-2xl
                            rounded-md hover:scale-105 shadow-lg
                            shadow-blue-500/50 dark:bg-gray-900
                            dark:shadow-gray-900/50`}
                            type="submit">Confirm</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default NewTicket
