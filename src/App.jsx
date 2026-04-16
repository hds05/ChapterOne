import { useEffect, useState } from 'react'
import './App.css'
import Header from './Components/Header'
import { Outlet } from 'react-router-dom'
import Welcome from './Components/Welcome'
import Footer from './Components/Footer'

function App() {
  // state for thevisibility of welcome component
  const [visibility, setVisibility] = useState(true)
  useEffect(() => {
    // hide the welcome component fro, UI in 3900 seconds
    const welcome = setTimeout(() => {
      setVisibility(false)
    }, 3900)

    // clear the timeout when the component unmounts
    return ()=> clearTimeout(welcome)
  }, [])
  return (
    <>
      {visibility ? <Welcome /> :
        <>
        {/* header and footer would be shown all pages */}
          <Header />
          {/* renders the current route's component */}
          <Outlet />
          <Footer />
        </>
      }
    </>
  )
}

export default App
