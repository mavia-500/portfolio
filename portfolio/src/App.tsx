

import { BrowserRouter } from 'react-router-dom'
import './App.css'
import Navbar from './comonents/Navbar'
import Projects from './comonents/projects'
import Home from './pages/home'

function App() {
  

  return (
    <>
    <BrowserRouter>
     <Home/>
     
     </BrowserRouter>
    </>
  )
}

export default App
