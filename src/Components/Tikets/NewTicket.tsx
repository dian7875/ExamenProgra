import ListTravelRoutes from "../ListTravelRoutes"

const NewTicket = () => {
    return (
        <>
            <div className=" pt-10">
                <form className="flex justify-center items-center flex-col gap-8 w-full">
                    <div className="flex items-center justify-center gap-5 w-full">
                        <ListTravelRoutes />
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
