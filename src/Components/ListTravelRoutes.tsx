import UseGetRoutesList from "../Hooks/Routes/UseGetRoutesList"

const ListTravelRoutes = ({ register }: any) => {
    const { Options } = UseGetRoutesList()
    return (
        <>
            <label className="text-2xl text-center" htmlFor="">Depure Point</label>
            <select
                {...register?.("departurePoint")}
                className=" rounded-md border-slate-300" title="Depure">
                <option value="">Please Select</option>
                {Options()}
            </select>
            <label className="text-2xl text-center" htmlFor="">Arrival Point</label>
            <select  {...register?.("arrivalPoint")}
                className=" rounded-md border-slate-300" title="Arivall">
                <option value="">Please Select</option>
                {Options()}
            </select>
        </>
    )
}

export default ListTravelRoutes
