import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import Landing from './components/Landing/Landing';
import Navbar from './components/Navbar/Navbar';
import Portfolio from './components/Portfolio/Portfolio';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/modelin' element={<Landing/>} />
        <Route path='/portfolio' element={<Portfolio/>} />
        <Route path='/about' element={<About />} />
      </Routes>
      
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
