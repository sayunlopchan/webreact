import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import RootLayout from './Ui/RootLayout'
import About from './Features/Links/About'
import Contact from './Features/Links/Contact'
import Services from './Features/Links/Services'
import Home from './Features/Home/Home'

const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      children: [
        { index: true, element: <Home /> },
        { path: 'Home', element: <Home /> },
        { path: 'About', element: <About /> },
        { path: 'Services', element: <Services /> },
        { path: 'Contact', element: <Contact /> },
      ]
    }
  ])
  return <RouterProvider router={router} />
}

export default App