import { Link } from 'react-router-dom'
import ListRutas from './ListRutas'
import { useForm } from 'react-hook-form';
import useConfirmTravel from '../Hooks/UseConfirmTravel';
import { Tiket } from '../Types/Ticket';

const Home = () => {

  const { register, handleSubmit} = useForm<Tiket>();
  const { onSubmit } = useConfirmTravel()
  

  return (
    <>
    <div>
      <Link to={'/'}>Principal</Link>
      <Link to={'/TablaRutas'}>Reportes</Link>
    </div>
      <form onSubmit={handleSubmit(onSubmit)}>
      <ListRutas register={register}></ListRutas>
      <ListRutas register={register}></ListRutas>
      <button type="submit">Confirmar</button>
      </form>
    </>
  )
}

export default Home
