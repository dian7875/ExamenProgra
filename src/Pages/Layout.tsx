import { Link, Outlet } from "react-router-dom"
import UseGetMenuElement from "../Hooks/Menu/UseGetMenuElement"

const Layout = () => {
  const { elements, isLoading } = UseGetMenuElement()
  if (isLoading) {
    <div className="flex items-center justify-center h-screen">
      <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
    </div>
  }
  return (
    <>
      <nav className="w-full flex justify-center items-center text-3xl pt-3 mb-10 gap-10">
        {elements.map(item => (
          <Link key={item.id} to={item.path}>
            <button className="hover:scale-105 hover:text-blue-400" type="button">
              {item.title}
            </button>
          </Link>
        ))}
      </nav>
      <Outlet />
    </>
  )
}

export default Layout
