import NewTicket from '../Components/Tikets/NewTicket'

const Tickets = () => {
  return (
    <>
      <main className=" h-5/6 w-full flex flex-col justify-center items-center">
      <span>
        <span className=" text-2xl">New Ticket</span>
      </span>
      <div className="w-full h-full">
        <NewTicket />
      </div>
    </main>
    </>
  )
}

export default Tickets
