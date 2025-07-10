

import { BrowserRouter } from 'react-router-dom'
import './App.css'
import Navbar from './comonents/Navbar'
import Projects from './comonents/projects'

function App() {
  

  return (
    <>
    <BrowserRouter>
     <Navbar/>
     <Projects/>
     </BrowserRouter>
    </>
  )
}

export default App
