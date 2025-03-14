import Navigation from './HeaderNav'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
      <Navigation />
      <Outlet />
    </>
  )
}

export default Layout