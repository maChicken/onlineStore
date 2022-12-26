import React, { useContext, useEffect, useState, useTransition } from 'react'
import {BrowserRouter} from 'react-router-dom'
import AppRouter from './components/AppRouter'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import { observer } from 'mobx-react-lite'
import { Context } from '.'
import {check} from "./http/userAPI";

const App = observer(() => {
  const {user} = useContext(Context)
  const [loading, setLoadign] = useState(true)

  useEffect( () => {
    check().then(data => {
      user.setUser(true)
      user.setIsAuth(true)
    }).finally( () => setLoadign(false))
  }, [])

  return (
    <BrowserRouter>
      <div className='footer-fix'>
        <NavBar />
        <div className='footer-fix1'>
          <AppRouter />
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  )
})

export default App
