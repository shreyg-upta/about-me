import React from 'react'
import { Routes, Route } from 'react-router-dom'
import AboutMe from './AboutMe'
import Experience from './Experience'
import Contact from './Contact'
import CP from './CP'
import Work from './work'
import Talk from './Talk'

function App() {
  return (
    <Routes>
      <Route path="/about-me/" element={<AboutMe />} />
    <Route path="/about-me/experience/" element={<Experience />} />
    <Route path="/about-me/projects/" element={<Work />} />
    <Route path="/about-me/contact/" element={<Contact />} />
    <Route path="/about-me/cp/" element={<CP />} />
    <Route path="/about-me/talk/" element={<Talk />} />
    </Routes>
  )
}

export default App