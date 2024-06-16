import { Datepicker } from "flowbite-react"
import ListTravelRoutes from "../ListTravelRoutes"

const Reports = () => {


    return (
        <>
            <div className="h-full flex justify-around px-6 gap-6">
                <div className="flex flex-col items-center w-2/4 gap-5">
                    <label className="text-2xl" htmlFor="">Start Day</label>
                    <Datepicker className=" w-full" />
                    <label className="text-2xl" htmlFor="">End Day</label>
                    <Datepicker className="w-full" />
                    <div className=" flex flex-col w-full gap-5">
                        <ListTravelRoutes />
                    </div>
                </div>
                <div className="flex flex-col items-center pt-12 w-4/5 gap-11">
                    <span className="text-xl shadow rounded-lg w-2/3 h-16">
                        <label htmlFor="">Money</label>
                        <br />
                        <label htmlFor="">$</label>
                    </span>
                    <span className="text-xl shadow rounded-lg w-2/3 h-16">
                        <label htmlFor="">People Count</label>
                        <br />
                        <label htmlFor=""> 19</label>
                    </span>
                </div>

            </div>

        </>


    )
}

export default Reports
