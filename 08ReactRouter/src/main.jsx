/* eslint-disable no-unused-vars */

import ReactDOM from 'react-dom/client'
import React from 'react'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter,createRoutesFromElements } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import User from './components/User/User.jsx'
import Github from './components/Github/Github.jsx'
import Githubstatic, { GithubInfoLoader } from './components/Githubstatic/Githubstatic.jsx'

// Route chya aat 2 property astat which is path and element
// 1. Path is the URL name
// 2. element is the React Component which we want to render corresponding to the provided path


// URL cha mapping kasa hota?
// / is a parent element + Home and about are child element
// Suruvatilach / barobar layout cha element map kela janar

// / barobr ''(null) append kela tr layout madhe home wala route outlet chya ithe lagnar
// / barobr about append kela (/about ) tr layout madhe about wala route outlet chya ithe lagnar



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      {/* children taku shaktoy je / la append honar */}
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />}/>
      <Route path='contact' element={<Contact />} />
      <Route path='user/:userId' element={<User/>} />
      <Route path='github/:username' element ={<Github/>} />
      <Route 
      loader={GithubInfoLoader} //ithech ek fetch cha function lihu shaktoy or component madhe async fn lihuyat
      path='githubstatic'
      element ={<Githubstatic/>} 
      />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router} />
  </React.StrictMode>,

)
