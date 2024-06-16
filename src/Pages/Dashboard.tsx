import Reports from "../Components/Reportes/Reports"

const Dashboard = () => {
  return (
    <main className=" h-5/6 w-full flex flex-col justify-center items-center">
      <span>
        <span className=" text-2xl">Tickets Dashboard</span>
      </span>
      <div className="w-full h-full">
        <Reports />
      </div>
    </main>
  )
}

export default Dashboard
