import {
  createBrowserRouter,
  RouterProvider
} from 'react-router'
import './App.scss'
import Home from './routes/Home'

const Router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  }
])

const App = () => {
  return (
    <RouterProvider router={Router} />
  )
}

export default App
