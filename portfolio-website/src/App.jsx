import { useState } from 'react'
import { Routes, Route } from "react-router-dom"
import './css/App.css'
import NavBar from "./components/NavBar"
import ProjectCard from './components/ProjectCard'
import Profile from './pages/Profile.jsx'

function App() {

  return (
    <>
      <div>
        <NavBar />
        <p>Hello world</p>
        <ProjectCard project = {{title:"Cool website",shortDescription:"This is a neat project"}}/>
        <Routes>
          <Route path = "/" element = {<Profile />}/>
        </Routes>
      </div>
    </>
  )
}

export default App
