import './App.css';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import Project from './Components/Project/Project';
import { BrowserRouter as Router, Routes, Link, Route } from 'react-router-dom';
import ScrollToTop from './Function/ScrollToTop';
import CursorIcon from './Components/CursorIcon/CursorIcon';
function App() {
  return (
    <Router>
      <div className='text-center font-Montserrat bg-[#efe6dc] '>
        <ScrollToTop />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/project' element={<Project />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/cursoricon' element={<CursorIcon />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
