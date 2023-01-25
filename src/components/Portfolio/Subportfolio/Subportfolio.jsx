import React, { useState } from 'react'
import { useEffect } from 'react';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import SubportfolioPage from './SubportfolioPage.jsx';

const Subportfolio = () => {
    const [data, setData] = useState('');

    useEffect(() => {
        fetch('./modelin/data/portfolios.json')
            .then(response => response.json())
            .then(response => {
                setData(response)
                console.log('Portfolio page',response)
            })
        
    }, [] )
  return (
      <>
          {data.map((portfolio) => 
             <Router>
                  <Route path={portfolio.path} element={ <SubportfolioPage /> } />
              </Router>
               
          
            
          
          )}
      </>
  )
}

export default Subportfolio