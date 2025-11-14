import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Footer from './components/Footer'
import Cards from './components/Cards'
import About from './components/About'
import Celebration from './components/Celebration'
import Contact from './components/Contact'
import ExploreDepartments from './components/ExploreDepartments'
import Facilities from './components/Facilites'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

function App() {
  const router = createBrowserRouter ([
    {
      path: "/exploreDepartments",
      element: <ExploreDepartments />
    },
    {
      path: "/facilities",
      element: <Facilities />
    },
    {
      path: "/contact",
      element: <Contact />
    }
  ])

  return (
    <div>
      <Header />
      <Hero />
      <Cards />
      <About />
      <Celebration />
      <Footer />
      <RouterProvider router={router} />
    </div>
  )
}

export default App
