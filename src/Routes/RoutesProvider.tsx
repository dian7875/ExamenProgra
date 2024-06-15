import { createBrowserRouter } from "react-router-dom"
import TablaRutas from "../Components/TablaRutas"
import Home from "../Components/Home"

const RoutesProvider = createBrowserRouter(

    [
        {
          path: "/",
          element: <Home/>
        },
        {
          path: "/TablaRutas",
          element: <TablaRutas/>
        }
      ]
)

export default RoutesProvider
