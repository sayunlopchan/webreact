import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import RootLayout from './Ui/RootLayout'
import Main from './Features/Home/Main'
import About from './Features/Links/About'
import Contact from './Features/Links/Contact'
import Services from './Features/Links/Services'

const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      children: [
        { index: true, element: <Main /> },
        { path: 'Main', element: <Main /> },
        { path: 'About', element: <About /> },
        { path: 'Services', element: <Services /> },
        { path: 'Contact', element: <Contact /> },
      ]
    }
  ])
  return <RouterProvider router={router} />
}

export default App