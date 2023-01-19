import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Landing from './components/Landing/Landing';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/modelin' element={<Landing/>} />
      </Routes>
      
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
