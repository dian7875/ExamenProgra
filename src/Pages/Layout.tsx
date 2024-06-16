import { Link, Outlet } from "react-router-dom"

const Layout = () => {
  return (
    <>
      <nav className="w-full flex justify-center items-center text-3xl pt-3 mb-10 gap-10">
        <Link to={'/Tickets'}>
          <button className="hover:scale-105 hover:text-blue-400" type="button">
            Create Ticket
          </button>
        </Link>
        <Link to={'/List'}>
          <button className=" hover:scale-105 hover:text-red-400
                            " type="button">
            Tikets List
          </button>
        </Link>
      </nav>
      <Outlet />
    </>
  )
}

export default Layout
