import React from 'react'
import About from './About/About'
import Detail from './Details/Detail'
import Header from './Header/Header'
import Service from './Service/Service'

const Landing = () => {
  return (
      <div>
          <Header />
          <About />
          <Service />
          <Detail />
        </div>
  )
}

export default Landing