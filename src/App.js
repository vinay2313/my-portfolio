import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import About from './pages/About';
import Conact from './pages/Conact';
import Home from './pages/Home';
import Navbar from './pages/Navbar';
import Projects from './pages/Projects';
import Skills from './pages/Skills';


function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/skills' element={<Skills/>}/>
        <Route path='/projects' element={  <Projects/>}/>
        <Route path='/contact' element={  <Conact/>}/>
      </Routes>
    
      </Router>
    </div>
  );
}

export default App;
