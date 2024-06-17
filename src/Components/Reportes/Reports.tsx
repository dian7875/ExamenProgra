import { Datepicker } from "flowbite-react"
import ListTravelRoutes from "../ListTravelRoutes"
import { useForm } from "react-hook-form";
import { ReportParamet } from "../../Types/Rutas";
import UseReport from "../../Hooks/Tickets/UseReport";
import { useEffect } from "react";

const Reports = () => {

    const { setValue, register, watch } = useForm<ReportParamet>();
    const { getReport, GReportData, getDatesReport, getRouteReport, RouteReportData, DatesReportData } = UseReport();

    const startDate = watch('start');
    const endDate = watch('end');
    const Arrival = watch('arrivalPoint');
    const Departure = watch('departurePoint')

    useEffect(() => {
        if (startDate && endDate) {
            getDatesReport(startDate, endDate);
        }
    }, [startDate, endDate, getDatesReport]);

    useEffect(() => {
        if (startDate && endDate && Arrival && Departure) {
            getReport(startDate, endDate, Arrival, Departure);
        }
    }, [startDate, endDate, Arrival, Departure, getReport]);

    useEffect(() => {
        if (Arrival && Departure) {
            getRouteReport(Departure, Arrival);
        }
    }, [Arrival, Departure, getRouteReport]);

    const handleDateStartChange = (date: Date | null) => {
        if (date) {
            const formattedDate = date.toISOString().split('T')[0];
            setValue('start', formattedDate);
        }
    };

    const handleDateEndChange = (date: Date | null) => {
        if (date) {
            const formattedDate = date.toISOString().split('T')[0];
            setValue('end', formattedDate);
        }
    };

    return (
        <>
            <form className="h-full flex justify-around px-6 gap-6">
                <div className="flex flex-col items-center w-2/4 gap-5">
                    <label className="text-2xl" htmlFor="">Start Day</label>
                    <Datepicker className=" w-full" onSelectedDateChanged={handleDateStartChange} />
                    <label className="text-2xl" htmlFor="">End Day</label>
                    <Datepicker className="w-full" onSelectedDateChanged={handleDateEndChange} />
                    <div className=" flex flex-col w-full gap-5">
                        <ListTravelRoutes register={register} />
                    </div>
                </div>
                <div className="flex flex-col items-center pt-12 w-4/5 gap-11">
                    <span className="text-xl shadow rounded-lg w-2/3 ">
                        <span>Result By Routes</span> <br />
                        <label htmlFor="">Money: ${RouteReportData?.totalMoney} </label>
                        <br />
                        <label htmlFor="">People Count: {RouteReportData?.passengerCount} </label>
                    </span>
                    <span className="text-xl shadow rounded-lg w-2/3 ">
                        <span>Result By Date Range</span> <br />
                        <label htmlFor="">Money: ${DatesReportData?.totalMoney} </label>
                        <br />
                        <label htmlFor="">People Count:{DatesReportData?.passengerCount} </label>
                    </span>
                    <span className="text-xl shadow rounded-lg w-2/3 ">
                        <span>Routes And Date Results</span> <br />
                        <label htmlFor="">Money: $ {GReportData?.totalMoney} </label>
                        <br />
                        <label htmlFor="">People Count: {GReportData?.passengerCount} </label>
                    </span>
                </div>
            </form>
        </>
    )
}

export default Reports
