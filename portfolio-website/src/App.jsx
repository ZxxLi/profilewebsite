import { useState } from 'react'
import './css/App.css'
import NavBar from "./components/NavBar"
import ProjectCard from './components/ProjectCard'

function App() {

  return (
    <>
      <div>
        <NavBar />
        <p>Hello world</p>
        <ProjectCard project = {{title:"Cool website",shortDescription:"This is a neat project"}}/>
      </div>
    </>
  )
}

export default App
