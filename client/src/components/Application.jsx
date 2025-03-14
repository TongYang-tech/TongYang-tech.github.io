import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { MantineProvider } from '@mantine/core'
import Home from './Home'
import Layout from './Layout'
import Experience from './Experience'
import Projects from './Projects'

const Application = () => {
  const router = createBrowserRouter(
    [
      {
        path: '/',
        element: <Layout />,
        children: [
          {
            path: '/',
            element: <Home />
          },
          {
            path: '/experience',
            element: <Experience />
          },
          {
            path: '/projects',
            element: <Projects />
          }
        ]
      }
    ], {
    basename: import.meta.env.BASE_URL
  })

  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <RouterProvider router={router} />
    </MantineProvider>
  )
}

export default Application
