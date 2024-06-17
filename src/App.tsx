import { RouterProvider } from 'react-router-dom'
import Routes from './Routes/Routes'
import { Toaster } from 'react-hot-toast'
function App() {
return(
    <>
    <Toaster/>
      <div className='h-screen'>
      <RouterProvider router={Routes} />
      </div>
    </>
)
}

export default App
