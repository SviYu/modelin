import React, { useState } from 'react'
import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom'
import SubportfolioPage from './SubportfolioPage';

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
            <Routes>
                  <Route path={portfolio.path} element={ <SubportfolioPage /> } />
            </Routes>
          
          
          )}
      </>
  )
}

export default Subportfolio