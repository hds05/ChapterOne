import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Addbooks from './Components/Addbooks.jsx'
import BrowseBooks from './Components/BrowseBooks.jsx'
import HomePage from './Components/HomePage.jsx'
import BookDetailPage from './Components/BookDetailPage.jsx'
import Error404 from './Components/Error404.jsx'
import { Provider } from 'react-redux'
import { store } from './utils/store.js'

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error404 />,
    children: [
      {
        path: '/',
        element: <HomePage />,
        errorElement: <h1 className='h-screen font-[Nunito] font-bold  flex justify-center items-center text-sm md:text-2xl text-center m-2'>Oooppsss!!! we are having some error..😬</h1>
      },
      {
        path: '/addbook',
        element: <Addbooks />,
        errorElement: <h1 className='h-screen font-[Nunito] font-bold  flex justify-center items-center text-sm md:text-2xl text-center m-2'>Oooppsss!!! We don't have Books of this category..😬</h1>
      },
      {
        path: '/books',
        element: <BrowseBooks />,
        errorElement: <h1 className='h-screen font-[Nunito] font-bold  flex justify-center items-center text-sm md:text-2xl text-center m-2'>Oooppsss!!! We are having some error here..😬</h1>
      },
      {
        path: '/books/:Category',
        element: <BrowseBooks />,
        errorElement: <h1 className='h-screen font-[Nunito] font-bold  flex justify-center items-center text-sm md:text-2xl text-center m-2'>Oooppsss!!! We don't have Books of this category..😬</h1>
      },
      {
        path: '/book/:id',
        element: <BookDetailPage />,
        errorElement: <h1 className='h-screen font-[Nunito] font-bold  flex justify-center items-center text-sm md:text-2xl text-center m-2'>Oooppsss!!! There is no Book with this ID..😬</h1>
      },

    ]
  },
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>

      <RouterProvider router={appRouter} />

    </Provider>
  </StrictMode>,
)
