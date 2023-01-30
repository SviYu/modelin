import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Landing from './components/Landing/Landing';
import Navbar from './components/Navbar/Navbar';
import Portfolio from './components/Portfolio/Portfolio';
import SubportfolioPage from './components/Portfolio/Subportfolio/SubportfolioPage';

function App() {

  const [portfolioDetails, setPortfolioDetails] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/modelin/data/portfolios.json')
      .then(response => response.json())
      .then(response => {
        setPortfolioDetails(response)
        console.log('Test App', response)
    })
  },[])  

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/modelin' element={<Landing />} />
        
        <Route path='/portfolio/' element={<Portfolio portfolioDetails={portfolioDetails} />} />

        <Route path='/portfolio/:portfolioID'
          element={
            <SubportfolioPage portfolioDetails={portfolioDetails} />
          } />

        <Route path='/about' element={<About />} />

        <Route path='/contact' element={<Contact />} />
      </Routes>
      
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
