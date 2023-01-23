import React, { useEffect, useState } from 'react';
import s from './Header.module.css';
/* import portBg1 from './../../../assets/portfolios/01/portfolio_01.jpg'; */

const Header = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        /* fetch('https://modelin.webmcdm.dk/portfolios') */
        fetch('./modelin/data/portfolios.json')
            .then( response => response.json())
            .then( response => {
                setData(response);
                console.log('response', response)
            })
    }, [])

    return (
        <div className={s.header}>
            <h1 className={s.title}>Portfolio</h1>
            <p className={s.undertext}>Experience of over 10 years of successful projects on creating unique and modern interior designs all over the world</p>

            {/* <div className={s.imageWrapper}>
              <a href='/'>
                  <img src={portBg1} alt="Hotel Lounge with Veranda" />
                  <div className={s.overlayContent}>
                      <div className={s.overlay}></div>
                      <i class="fa-solid fa-plus"></i>
                      <h3>
                          {data.map((item, id) => 
                              item.title)
                          }
                      </h3>
                  </div>
              </a>
          </div> */}

            {data.map((portfolios, id) => 

                <a href = "/" key = { id } >
                  <img src={portfolios.teaser} alt="Home design"/>
                  <h3>{portfolios.title}</h3>
                </a>

          )}



    </div>
  )
}

export default Header