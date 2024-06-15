import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import RoutesProvider from './Routes/RoutesProvider.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <>
    <RouterProvider router={RoutesProvider}/>
    </>
  )
