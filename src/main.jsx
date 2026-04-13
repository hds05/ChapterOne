import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom'
import Addbooks from './Components/Addbooks.jsx'
import BrowseBooks from './Components/BrowseBooks.jsx'
import HomePage from './Components/HomePage.jsx'
import BookDetailPage from './Components/BookDetailPage.jsx'
import Error404 from './Components/Error404.jsx'

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error404 />,
    children: [
      {
        path: '/',
        element: <HomePage />,
        errorElement: <h1>there is an error....in HomePage.jsx</h1>
      },
      {
        path: '/addbook',
        element: <Addbooks />,
        errorElement: <h1>there is an error....in add books</h1>
      },
      {
        path: '/books',
        element: <BrowseBooks />,
        errorElement: <h1>there is an error....in Browse books</h1>
      },
      {
        path: '/books/:category',
        element: <BrowseBooks />,
        errorElement: <h1>It is error.... about books category</h1>
      },
      {
        path: '/book/:id',
        element: <BookDetailPage />,
        errorElement: <h1>It is error.... about books's id</h1>
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
