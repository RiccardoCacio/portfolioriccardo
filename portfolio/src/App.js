import './App.css';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import Project from './Components/Project/Project';
import { BrowserRouter as Router, Routes, Link, Route } from 'react-router-dom';
function App() {
  return (
    <Router>
      <div className='text-center font-Montserrat bg-[#efe6dc]'>
        {/* <Navbar /> */}

        <Routes>

          <Route path='/' element={<Home />} />
          <Route path='/project' element={<Project />} />
          <Route path='/contact' element={<Contact />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
