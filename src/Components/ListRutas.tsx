import { UseFormRegister } from "react-hook-form"
import { Tiket } from "../Types/Ticket"

const ListRutas = ({ register }: { register: UseFormRegister<Tiket>}) => {
  return (
    <>
    <div>
      <select title='Origen' id=""
       {...register(`Id_Ruta1`)}
      >
      <option value="1">Ruta 1</option>
      <option value="2">Ruta 2</option>
      <option value="3">Ruta 3</option>
      </select>
    </div>
    </>
  )
}

export default ListRutas
