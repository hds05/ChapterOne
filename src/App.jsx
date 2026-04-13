import { useEffect, useState } from 'react'
import './App.css'
import Header from './Components/Header'
import { Outlet } from 'react-router-dom'
import Welcome from './Components/Welcome'
import Footer from './Components/Footer'

function App() {
  const [visibility, setVisibility] = useState(true)
  useEffect(() => {
    const welcome = setTimeout(() => {
      setVisibility(false)
    }, 3900)

    return ()=> clearTimeout(welcome)
  }, [])
  return (
    <>
      {visibility ? <Welcome /> :
        <>
          <Header />
          <Outlet />
          <Footer />
        </>
      }
    </>
  )
}

export default App
