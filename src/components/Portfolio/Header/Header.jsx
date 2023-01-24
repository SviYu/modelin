import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import s from './Header.module.css';

const Header = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        /* fetch('https://modelin.webmcdm.dk/portfolios') */
        fetch('./modelin/data/portfolios.json')
            .then( response => response.json())
            .then( response => {
                setData(response);
            })
    }, [])

    return (
        <div className={s.header}>
            <h1 className={s.title}>Portfolio</h1>
            <p className={s.undertext}>Experience of over 10 years of successful projects on creating unique and modern interior designs all over the world</p>

            <div className={s.wrapper}>

                {data.map((portfolios, id) => 
                    <Link to={portfolios.path} key={id} className={s.link}>
                        <div className={s.imageBox}>
                            <img src={`https://modelin.webmcdm.dk${portfolios.teaser}`} className={s.image} alt="Home design" />

                            <div className={s.overlay}>
                                <i className="fa-solid fa-plus"></i>
                                <h3 className={s.imgTitle}>{portfolios.title}</h3>
                            </div>
                        </div>
                    </Link>
                )}

            </div>



    </div>
  )
}

export default Header