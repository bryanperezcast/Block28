import './App.css'
import { Routes, Route, Link } from "react-router-dom";
import Red from './components/Red'
import Blue from './components/Blue'
import Home from './components/Home'

function App() {

  return (
  <div id="container">
    <div id="navbar">
      <Link to= "/Blue">blue</Link>
      <Link to= "/Red">red</Link>
      <Link to= "/Home">Home</Link>
    </div>

    <div id="main-section">
      <Routes>
        <Route path='/Blue' element= {<Blue/>} />
        <Route path='/Red' element= {<Red/>} />
        <Route path='/Home' element= {<Home/>} />
      </Routes>
    </div>
  </div>
  )
}

export default App
