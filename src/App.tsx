import { RouterProvider } from 'react-router-dom'
import Routes from './Routes/Routes'

function App() {

  return (
    <>
      <div className='h-screen'>
        <RouterProvider router={Routes} />
      </div>
    </>
  )
}

export default App
