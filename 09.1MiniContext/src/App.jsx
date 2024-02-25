/* eslint-disable no-unused-vars */

import Login from './components/Login'
import Profile from './components/Profile'
import DashBoard from './components/DashBoard'
import {UserContextProvider} from './context/UserContext'
import { useState } from 'react'

import './App.css'
import { useUserContext } from './context/UserContext'

function App() {
  const [Username, setUsername] = useState("")
  const [Password, setPassword] = useState("")
  // We are assuming this as a parent component
  return (
    <>
      <UserContextProvider value = {{Username , Password, setUsername , setPassword}}>
      <Login />
      <Profile />
      <DashBoard />
      </UserContextProvider>

    </>
  )
}

export default App
