import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import 'bootstrap/dist/css/bootstrap.min.css'
import Main from './components/Main'
import Cards from './components/Cards'

function App() {
    return (
    <>
    <Header/>
    <Main/>
    <Cards/>
    </>
  )
}

export default App
