import { useEffect, useState } from 'react'
import './App.css'
import Header from './Components/Header'
import { Outlet } from 'react-router-dom'
import Welcome from './Components/Welcome'

function App() {
  const [visibility, setVisibility] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setVisibility(false)
    }, 3000)
  }, [])
  return (
    <>
      {visibility ? <Welcome /> :
        <>
          <Header />
          <Outlet />
        </>
      }
    </>
  )
}

export default App
