const ListTravelRoutes = () => {
    return (
        <>
            <label className="text-2xl text-center" htmlFor="">Depure Point</label>
            <select className=" rounded-md border-slate-300" title="Depure">
                <option value="A">Point A</option>
                <option value="B">Point B</option>
                <option value="C">Point C</option>
                <label htmlFor="">Arrival Point</label>
            </select>
            <label className="text-2xl text-center" htmlFor="">Arrival Point</label>
            <select className=" rounded-md border-slate-300" title="Arivall">
                <option value="A">Point A</option>
                <option value="B">Point B</option>
                <option value="C">Point C</option>
            </select>
        </>
    )
}

export default ListTravelRoutes
