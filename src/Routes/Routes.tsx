import { createBrowserRouter } from "react-router-dom"
import Dashboard from "../Pages/Dashboard"
import Layout from "../Pages/Layout"
import Tickets from "../Pages/Tickets"

const Routes = createBrowserRouter(
  [
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: "/Tickets",
          element: <Tickets/>
        },
        {
          path: "/List",
          element: <Dashboard />
        }
      ]
    }
  ]
)

export default Routes
