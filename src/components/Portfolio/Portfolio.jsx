import React from 'react'
import Detail from '../Landing/Details/Detail'
import Header from './PortfolioHeader/PortfolioHeader.jsx'

const Portfolio = ( {portfolioDetails} ) => {
  return (
      <div>
        <Header portfolioDetails={ portfolioDetails } />
        <Detail />
    </div>
  )
}

export default Portfolio