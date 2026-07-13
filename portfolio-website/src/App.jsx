import { useState } from 'react'
import { Routes, Route } from "react-router-dom"
import './css/App.css'
import NavBar from "./components/NavBar"
import ProjectCard from './components/ProjectCard'
import Profile from './pages/Profile.jsx'
import Projects from './pages/Projects.jsx'
import Contact from './pages/Contact.jsx'

function App() {

  return (
    <>
      <div>
        <NavBar />
        <main>
          <Routes>
            <Route path = "/" element = {<Profile />}/>
            <Route path = "/Profile" element = {<Profile />}/>
            <Route path = "/Projects" element = {<Projects />}/>
            <Route path = "/Contact" element = {<Contact />}/>
          </Routes>
        </main>
      </div>
    </>
  )
}

export default App
