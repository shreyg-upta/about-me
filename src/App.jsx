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
      <Route path="/" element={<AboutMe />} />
    <Route path="/experience/" element={<Experience />} />
    <Route path="/projects/" element={<Work />} />
    <Route path="/contact/" element={<Contact />} />
    <Route path="/cp/" element={<CP />} />
    <Route path="/talk/" element={<Talk />} />
    </Routes>
  )
}

export default App