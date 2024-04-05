// import React from 'react'
// import Header from './components/Header'
// import Home from './components/Home'
import styles from './App.module.css'
import Navbar from './components/Navbar/Navbar'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import Experience from './components/experience/Experience'
import Hero from './components/hero/Hero'
import Project from './components/projects/Project'
const App = () => {
  return (
    <div className={styles.App}>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Project />
      <Contact />
    </div>

  )
}

export default App
