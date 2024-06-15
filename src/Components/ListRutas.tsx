import { UseFormRegister } from "react-hook-form"
import { Tiket } from "../Types/Ticket"
import UseGetList from "../Hooks/UseChargeRoutes"
import { useEffect } from "react"

const ListRutas = ({ register }: { register: UseFormRegister<Tiket>}) => {
    const { getListRutas, rutas } = UseGetList()

    useEffect(() => {
        getListRutas();
    }, [getListRutas]);

    return (
        <>
            <div>
                <select title='Origen' id=""
                    {...register(`departurePoint`)}
                >
                    {rutas?.map((Rutas, index) => (
                        <option key={index} value={Rutas.id.toString()}>
                            {Rutas.departurePoint}
                        </option>
                    ))}
                </select>
            </div>
        </>
    )
}

export default ListRutas
