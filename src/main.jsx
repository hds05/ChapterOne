import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom'
import Addbooks from './Components/Addbooks.jsx'
import BrowseBooks from './Components/BrowseBooks.jsx'
import HomePage from './Components/HomePage.jsx'

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <h1>It is error page....in app.jsx</h1>,
    children: [
      {
        path: '/',
        element: <HomePage />,
        errorElement: <h1>It is error page....in add books</h1>
      },
      {
        path: '/addbook',
        element: <Addbooks />,
        errorElement: <h1>It is error page....in add books</h1>
      },
      {
        path: '/browsebooks',
        element: <BrowseBooks />,
        errorElement: <h1>It is error page....in Browse books</h1>
      },

    ]
  },
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <BrowserRouter> */}
    {/* <App /> */}
    <RouterProvider router={appRouter} />
    {/* </BrowserRouter> */}
  </StrictMode>,
)
