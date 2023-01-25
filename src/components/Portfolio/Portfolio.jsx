import React from 'react'
import Detail from '../Landing/Details/Detail'
import Header from './Header/Header.jsx'

const Portfolio = ( {portfolioDetails} ) => {
  return (
      <div>
        <Header portfolioDetails={ portfolioDetails } />
          <Detail />
    </div>
  )
}

export default Portfolio